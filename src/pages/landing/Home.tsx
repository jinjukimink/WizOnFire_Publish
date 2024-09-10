import { rightArrow, leftArrow } from "../../assets/assets";
import GradientChip from "../../components/common/gradientChip/GradientChip";
import useFetchData from "../../hooks/useFetchData";
import { StartImage, ArrowWapper, StartWizNews } from "./HomeStyles"
import TeamMatch from "./TeamMatch";

const Home = () => {
  const { data, isLoading, error } = useFetchData<THotIssue[]>('/media/hotissue?count=10'); 

  console.log('data',data);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      {/* 랜딩페이지 */}
      <StartImage>
        <ArrowWapper src={leftArrow} />
        <ArrowWapper src={rightArrow}/>
        <StartWizNews>
          <GradientChip main="KTWIZ" title="위즈소식" />
          {data && (
            <>
              <p>{data[0].artcTitle}</p>
              <p>{data[0].artcContents}</p>
              <a href="https://www.ktwiz.co.kr/media/wizpress/184875"> 
                자세히보기&nbsp;&gt;
              </a>
            </>
          )}
        </StartWizNews>
      </StartImage>
      <TeamMatch />
    </>
  );
};

export default Home;

