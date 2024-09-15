import { useSearchParams } from "react-router-dom";
import useFetchData from "../../../hooks/useFetchData";
import { Container } from "../../../pages/PagesStyles";
import { Wrapper, Contents, Img, StaffInfo, MainInfo, InfoList } from "./StaffDetailStyles"; // Import styles


export type TDetailStaff={
  playerName:string;
  engName:string;
  backnum:string;
  position:string;
  birth:string;
  height:string;
  weight:string;
  career:string;//출신교
  playerPrvwImg2:string;
  pcode:string;
  //coachstep:string;
}

export type TCoachData={

  coachstep:TDetailStaff

}
type TStaffDetailProps={
  detailPath:string
}
export type TGamePlayerProps={//오타 점검
  gameplayer:TDetailStaff
  recentgamerecordist:any;
  recentgamerecordlistfutures:any;
  seasonsummary:any;
  seasonsummaryfutures:any;
  yearrecodists:any;
}

const StaffDetail = ({detailPath}:TStaffDetailProps) => {
  const [params]=useSearchParams();
  const pcode=params.get("pcode");

  const {data:staff,isLoading,error} = useFetchData<{data:TGamePlayerProps}|{data:TCoachData}>(`player/${detailPath}?pcode=${pcode}`);
  console.log(staff)
//들어오는 객체 타입이 다름. 선수의 경우에는 객체안에 있는 또다른 객체한테 접근해야 함.


  // 데이터 타입에 따라 처리 (코치 vs 선수)
  let staffData: TDetailStaff |any;
  if (detailPath === "coachdetail") {
    //staffData = staff?.data.coachstep as TDetailStaff; // 코치 데이터는 직접 할당
    staffData = (staff?.data as TCoachData)?.coachstep;
  } else { 
    staffData = (staff?.data as TGamePlayerProps)?.gameplayer;
  } 

  console.log(staffData)

    // 로딩 중일 때 처리
  if (isLoading) return <p>Loading...</p>;

  // 에러 발생 시 처리
  if (error) return <p>에러 발생: {error}</p>;

  // 데이터가 없는 경우 처리
  if (!staff) return <p>정보를 찾을 수 없습니다.</p>;
  return (
    <>
    <Container>
      <Wrapper>
        <Contents>
          <Img src={staffData?.playerPrvwImg2} alt={staffData?.backnum}/>
          <StaffInfo>
            <MainInfo>
            <span style={{color:"#c00000"}}>No. {staffData?.backnum}</span>
            {staffData?.playerName}
            <span style={{fontSize:"18px"}}> {staffData?.engName}</span>
            </MainInfo>

            <InfoList>
              <ul>
                <li> 
                포지션 퓨처스 {staffData?.position}
                </li>
                <li>
                 생년월일  {staffData?.birth}
                 
                  </li>
                <li>체격  {staffData?.height}, {staffData?.weight}</li>
                <li>출신교 {staffData?.career}</li>
              </ul>
            </InfoList>
          </StaffInfo>
        </Contents>
      </Wrapper>
      </Container>
    </>
  );
}
export default StaffDetail