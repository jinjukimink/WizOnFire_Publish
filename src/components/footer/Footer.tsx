import { logo_ko, facebook, instagram, naver, youtube } from "../../assets/assets"
import { FooterContainer, FooterBox, Logo, Info, InfoDetail, InfoNetwork, StyledLi, } from "./FooterStyles"
import { RxGithubLogo } from "react-icons/rx";
import SelectBar from "../common/selectbar/SelectBar";
import SearchBar from "../common/searchbar/SearchBar";
import { FaAngleDown } from "react-icons/fa6";

const Footer = () => {

  const snsIcons = [
    {src: instagram, href: "https://www.instagram.com/ktwiz.pr/" ,alt: "Instagram" },
    { src: facebook, href: "https://www.facebook.com/ktwiz", alt: "Facebook" },
    { src: youtube, href: "https://www.youtube.com/c/ktwiztv", alt: "YouTube" },
    { src: naver, href: "https://tv.naver.com/ktwiz", alt: "Naver" }
  ];

  const options = [
    { label: 'KT estate', url: "https://www.ktestate.com/" },
    { label: 'KT telecom', url: "https://www.kttelecop.co.kr/" },
    { label: 'KT sat', url: "https://www.ktestate.com/" },
    { label: 'KT engineering', url: "https://www.ktestate.com/" },
    { label: 'KT is', url: "https://www.ktestate.com/" },
    { label: 'KT cs', url: "https://www.ktestate.com/" },
    { label: 'KT m&s', url: "https://www.ktestate.com/" },
    { label: 'KT linkus', url: "https://www.ktestate.com/" },
    { label: 'KT ds', url: "https://www.ktestate.com/" },
    { label: 'KT NexR', url: "https://www.ktestate.com/" },
  ];
  
  return (
    <FooterContainer>
      <FooterBox>
        <Logo src={logo_ko} alt="Logo_kor" />
        <Info>
          <ul>
            <StyledLi>
              <a href="https://github.com/WizOnFire/KT_Web">
                <RxGithubLogo />
              </a>
            </StyledLi>
            <li>개인정보 처리방침</li>
            <li>이용약관</li>
            <li>이메일무단수집거부</li>
            <li>Sitemap</li>
          </ul>
          <InfoDetail>
            <p>대표번호</p>
            <div>
              <span className="tel">1899-5916</span>
              <span className="timeInfo">운영시간 : 평일 10:00 ~ 18:00 / 주말 10:00 ~ 경기시작 전까지</span>
              <span className="timeInfo">월요일 및 주말 미경기 시 미운영</span>
            </div>
          </InfoDetail>
          <InfoDetail>
            <p>주소</p>
            <div>
              <span className="address">경기도 수원시 장안구 경수대로 (조원동) 수원 케이티 위즈파크</span>
            </div>
          </InfoDetail>
          <p>Copyright 2024 kt sports. All rights reserved.</p>
        </Info>
          <SelectBar 
          items={options} 
          placeholder="KT 그룹사 및 관련사이트" 
          width="252px"
          height="40px"
          containerBorder="1px solid rgba(0, 0, 0, .3)"
          containerBorderRadius="7px"
          containerPadding="13px 16px"
          labelPadding="0"
          labelTextSize="13px"
          textAlign="left"
          itemListBorder="0"
          itemListBorderRadius="16px"
          itemListPadding="7px 15px"
          maxHeight="120px"
          boxShadow="0 4px 6px rgba(0, 0, 0, .16)"
          itemTextSize="12px"
          itemPadding="8px 0"
          buttonIcon={FaAngleDown}/>
          <InfoNetwork>
          {/* selectbox */}
        {/* <SelectBar
            searchList={options} width="200px" height="100px"
      /> */}
          <ul>
            {
              snsIcons.map((icon, index)=>(
                <li key={index}>
                  <a href={icon.href}><img src={icon.src} alt={icon.alt}/></a>
                </li>
              ))
            }
          </ul>
        </InfoNetwork>
        <SearchBar placeholder="선수를 입력하세요" containerWidth="220px" height="35px" buttonWidth="50px"/>
        
      </FooterBox>
    </FooterContainer>
  );
}

export default Footer;