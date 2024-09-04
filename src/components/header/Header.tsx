import { useState,useEffect } from "react";
import { useScroll, useMotionValueEvent, useAnimation,AnimatePresence } from "framer-motion";
import ktwiz from "../../assets/images/ktwiz.png"
import { UpNav, Logo, Category, BottomNav, SubCategoryColumn, SubCategory } from "./HeaderStyles"; // 스타일 불러오기

const Header = () => {

  const categories = [
    "kt wiz",
    "wiz park",
    "game",
    "player",
    "media",
    "shop",
    "스폰서",
    "티켓구매",
  ];

  const subCategories: string[][] = [
    ["kt wiz는?", "구단 BI", "회원 정책", "스폰서", "월페이퍼"],
    ["수원 kt wiz park", "주차 예약", "찾아오기", "익산야구장"],
    ["정규리그", "퓨처스리그"],
    ["코칭스텝", "투수", "타자", "응원단", "응원가", "응원가 저작권"],
    ["wiz 뉴스", "wiz 스토리", "시구자 정보", "wiz 포토", "Live 영상모음"],
    [],
    [],
    ["티켓예매", "단체관람", "입장 및 좌석 정보"],
  ];
  //const [isVisible, setIsVisible] = useState(false); // 컴포넌트가 보이는 상태를 관리
  const [isHovered, setIsHovered] = useState(true);
  const navAnimation = useAnimation();
  const { scrollY } = useScroll();
  const [hoveredCategory,setHoveredCategory]=useState("");//어떤 게 호버가 되는지를 기억해야 함.
  const isLandingPage=window.location.pathname==="/";
  console.log(isLandingPage)

  useEffect(() => {
      if (isLandingPage) {
        navAnimation.start({ backgroundColor: "rgba(0,0,0,0)" });
      } else {
        navAnimation.start({ backgroundColor: "rgba(0,0,0,1)" });
      }
    }, [isLandingPage, navAnimation]);


  const handleMouseEnterCategory=(category:string)=>{
    setHoveredCategory(category);
    console.log(hoveredCategory)
  }

  const handleMouseLeaveCategory=(e:any)=>{//왜 호버가 떠나도 안먹
    setHoveredCategory("");
    console.log(e)
    console.log(hoveredCategory)
  }


  useMotionValueEvent(scrollY, "change", () => {
    const currentScrollY = scrollY.get();
    if(isLandingPage){
      if(currentScrollY<80){
        navAnimation.start({ backgroundColor: "rgba(0,0,0,0)" });
      }
      else if(currentScrollY > 80 && !isHovered) {
          navAnimation.start({ backgroundColor: "rgba(0,0,0,1)" });
      }
    }

  });

  const handleMouseEnter = () => {
    setIsHovered(true);
    navAnimation.start({ backgroundColor: "white" });
  };

  const handleMouseLeave = () => {//호버가 끝나면 무조건 네비바는 검은색임

    setIsHovered(false);
    if(isLandingPage && scrollY.get()<80){
      navAnimation.start({ backgroundColor: "rgba(0,0,0,0)" });
    }
    else{
      navAnimation.start({ backgroundColor: "rgba(0,0,0,1)" })
    }
  };

  
  return (
    <>
    <header>            
      <UpNav
        animate={navAnimation}
        initial={{ backgroundColor: isLandingPage ? "rgba(0,0,0,0)" : "rgba(0,0,0,1)" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        isHovered={isHovered}
      >
      <Logo isHovered={isHovered}>
      <img 
      src={isHovered? "https://www.ktwiz.co.kr/v2/imgs/img-logo-black.svg" :ktwiz}
       alt="logo"/>
      </Logo>
        {categories.map((category, index) => (
          <Category 
          hoveredCategory={category} 
          key={index} href={`/${category}`}
          onMouseEnter={()=>handleMouseEnterCategory(category)}
          onMouseLeave={(e)=>handleMouseLeaveCategory(e)}
          isHovered={hoveredCategory!=="" && hoveredCategory === category}
          >
            {category}
          </Category>
        ))}

      </UpNav>
      {/* <Border/> */}

      <AnimatePresence>
      {isHovered && (
        <BottomNav 
        initial={{opacity:0,height:0}} 
        animate={{opacity:1,height:300}}//투명도가 1이 되어 완전히 보이는 상태
        exit={{opacity:0,height:0}}
        transition={{duration:0.4}}
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
        >
          {categories.map((_, index) => (
            <SubCategoryColumn key={index}
            // onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            >
              {subCategories[index].length > 0 ? (
                subCategories[index].map((subCategory) => (
                  <SubCategory key={subCategory} href={`/${subCategory}`}>
                    {subCategory}
                  </SubCategory>
                ))
              ) : (
                <div style={{ width: "50px" }} /> 
              )}
            </SubCategoryColumn>
          ))}
        </BottomNav>
      )}    
      </AnimatePresence>
      
    </header>

    </>
  );
};

export default Header;
