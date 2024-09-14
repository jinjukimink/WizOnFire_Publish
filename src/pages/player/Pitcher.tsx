import StaffList from "../../components/player/StaffList";

const Pitcher = () => {
  return (
    <>
      <StaffList apiUrl="player/pitcherlist" staffType="pitcher"/>
    </>
  );
}
export default Pitcher 