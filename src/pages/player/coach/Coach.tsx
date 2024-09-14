import StaffList from "../../../components/player/StaffList";

const Coach = () => {
  return (
    <>
      <StaffList apiUrl="player/coachlist" staffType="coach"/>
    </>
  );
}
export default Coach