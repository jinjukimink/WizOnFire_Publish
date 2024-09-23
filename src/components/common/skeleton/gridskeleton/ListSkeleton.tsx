
import SkeletonGridContainer from "./SkeletonGridContainer";

type TListSkeletonProps = {
  columns: number;
  width: string;
  height: string;
  margin: string;
  borderRadius: string;
}

const ListSkeleton = (props: TListSkeletonProps) => {
  return (
    <>
      {/* props를 그대로 전달 */}
      <SkeletonGridContainer count={20} {...props} /> 
    </>
  );
}

export default ListSkeleton;
