import StaffList from "../../components/player/staffDetailList/StaffList";

const Infielder = () => {
  return (
    <>
      <StaffList apiUrl="player/infielderlist.json" staffType="infielder"/>
    </>
  );
}
export default Infielder