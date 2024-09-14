import Skeleton from "./Skeleton";
import styled from "styled-components";

const SkeletonList = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 2rem;
  margin: 0.5rem;
  justify-content: space-between;
  background: white;
  height: 17rem;
  filter: drop-shadow(rgb(211, 211, 211) 0px 0px 0.3rem);
  border-radius: 2rem;
`;

const ListSkeleton = () => {
  return (
    <>
       <SkeletonList>
      <Skeleton width="70%" height="1.7rem" />
      <Skeleton width="100%" height="2rem" margin="0.7rem 0" />
      <Skeleton width="40%" height="1.7rem" />
      <Skeleton width="35%" height="1.7rem" />
    </SkeletonList>
    </>
  );
}
export default ListSkeleton