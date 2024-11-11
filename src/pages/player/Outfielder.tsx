import StaffList from "../../components/player/staffDetailList/StaffList";

const Outfielder = () => {
  return (
    <>
      <StaffList apiUrl="player/pitcherlist.json" staffType="outfielder"/>
    </>
  );
}
export default Outfielder