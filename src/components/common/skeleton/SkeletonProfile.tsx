
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


const SkeletonProfile = () => {
    return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <p>skeleton</p>
    <p>
      <Skeleton count={3} />
    </p>
  </SkeletonTheme>

    );
    };

export default SkeletonProfile;