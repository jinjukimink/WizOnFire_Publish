import {
  SearchBarContainer,
  GridContainer,
  CoachCard,
  CoachImage,
  TextWrapper,
} from "./StaffListStyles"
import useFetchData from "../../../hooks/useFetchData";
import SearchBar from "../../common/searchbar/SearchBar";
import { Container } from "../../../pages/PagesStyles";
import { useNavigate} from "react-router-dom";
import ListSkeleton from "../../common/skeleton/ListSkeleton";

export type TStaff = {
  playerName: string;
  position: string;
  pcode: string;
  playerPrvwImg: string;
  backnum: string;
};

export type TStaffListProps= {
  apiUrl:string;
  staffType:string
};


export type TCoachData = {
  data: {
    list: TStaff[];
  };
};

const StaffList = ({apiUrl,staffType}:TStaffListProps) => {
  const { data: staffs, isLoading, error } = useFetchData<TStaff[]>(apiUrl);
  //console.log(staffs)//배열 그자체임

  const navigate=useNavigate();

    let stafflist: TStaff[] = [];

    if (staffType === "coach" && (staffs as unknown as TCoachData)?.data?.list) {
    stafflist = (staffs as unknown as TCoachData).data.list;
    } else {
    stafflist = staffs as TStaff[];
    }

  //if (isLoading) return <p>Loading...</p>;
  if(isLoading) return <ListSkeleton/>
  if (error) return <p>{error}</p>;

  const onClick=(pcode:string)=>{
    console.log(pcode);
    navigate(`/player/${staffType}/detail?pcode=${pcode}`);
  }

  return (
    <>
    <Container style={{padding:"0px"}}>
        <SearchBarContainer>    
        <SearchBar placeholder="검색어를 입력해주세요." containerWidth="220px" height="29px" buttonWidth="45px" />
      </SearchBarContainer>
        <GridContainer>
          {staffs  ? (
            stafflist.map((staff) => (
              <CoachCard key={staff.pcode}>
                <CoachImage
                  src={staff.playerPrvwImg ? staff.playerPrvwImg : "https://via.placeholder.com/100"}
                  alt={staff.playerName}
                  onClick={()=>onClick(staff.pcode)}
                />
                <TextWrapper>
                  <p style={{ color: "#ec0a0b" }}>No. {staff.backnum}</p>
                  <p>{staff.playerName}</p>
                </TextWrapper>
              </CoachCard>
            ))
          ) : (
            <p>No coach data available</p>
          )}
        </GridContainer>
</Container>
      
    </>
  );
};

export default StaffList;
