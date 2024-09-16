import styled from "styled-components";
import { GridContainer } from "../../components/player/staffDetailList/StaffListStyles";
import useFetchData from "../../hooks/useFetchData";
import { Container } from "../PagesStyles";
import CheerImage from "../../assets/images/landing/bg02.png"

export type TCheerleader = {
  imgPath: string;
  leaderHeight: string;
  imgPrvwPath: string;
  leaderEngName: string;
  leaderMotto: string;
  leaderNickName:string;
  leaderLikePlayer: string; // 추가된 필드
};

export type TCheerData = {
  data: {
    list: TCheerleader[];
  };
};

// CheerCard 스타일 개선
const CheerCard = styled.div`
  width: 250px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #d6d6d6;
  padding: 16px;
  margin: 10px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease-in-out;
  background-image: url(${CheerImage});
  background-size:150px 100px;
  background-repeat: no-repeat;
  background-position: bottom -20px center;
  div{
    text-align: center;
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
  }

  img {
    width: 200px;
    height: 200px;
    border-radius: 20%;
    object-fit: cover;
    margin-bottom: 16px;
    margin-top: 16px;
  }

  h1 {
    font-size: 30px;
    font-weight: 1000;
    color: #333;
    margin: 8px 0;
  }

  p {
    font-size: 25px;
    color: #000000;;
    margin: 4px 0;
    font-weight: 600;
  }

  .info {
    font-size: 16px;
    //color: #822222;
    margin-top: 12px;
    text-align: center;
    position: relative;
    display: flex;
    gap:50px;
  }
`;

const Title=styled.div`
  font-size: 16px;
  width:80px;
  height:18px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #ac9797;
`

const Cheer = () => {
  const { data, isLoading, error } = useFetchData<TCheerData|null>('player/cheerleader');
  const fetchDataList = data?.data.list;
  console.log(fetchDataList)

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data...</p>;

  return (
    <Container>
      <GridContainer columns={3}>
        {fetchDataList?.map((cheerleader, index) => (
          <CheerCard key={index}>
            <img src={cheerleader.imgPath} alt={cheerleader.leaderEngName} />
            <h1>{cheerleader.leaderEngName}</h1>
            <Title>Motto</Title>
            <p style={{fontSize:"16px"}}>{cheerleader.leaderMotto}</p>
            <div className="info">
              <div>
              <Title>Height</Title>
              <p>{cheerleader.leaderHeight}cm</p>
              </div>
              <div>
              <Title>NickName</Title>
              <p>{cheerleader.leaderNickName}</p>
              </div>
            </div>
          
          </CheerCard>
        ))}
      </GridContainer>
    </Container>
  );
};

export default Cheer;
