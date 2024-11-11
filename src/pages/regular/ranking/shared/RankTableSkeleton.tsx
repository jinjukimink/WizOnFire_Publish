import styled from "styled-components";
import { SkeletonBox } from "../../boxScore/recordButton/score/ScoreSkeleton";

const SkeletonTableDisplay = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

const SkeletonTableLeft = styled(SkeletonBox)`
    display: inline-block;
    width: 350px; 
    height: 25px;
    margin-top: 50px;
    margin-bottom: 20px;
    &:first-child{
        width: 100px;
        margin-right: 5px;
    }
    &:nth-child(3){
        width: 25px;
        margin-left: 5px;
    }
`;

const SkeletonTableRight = styled(SkeletonBox)`
    display: inline-block;
    text-align: right;
    width: 280px; 
    height: 25px;
    margin-top: 50px;
    margin-bottom: 20px;
`;

const SkeletonTableBox = styled(SkeletonBox)`
    width: 100%;
    height: 800px;
`;

const RankTableSkeleton = () => {
    return (
        <>
            <SkeletonTableDisplay>
                <div>
                    <SkeletonTableLeft />
                </div>
                <SkeletonTableRight />
            </SkeletonTableDisplay>
            <SkeletonTableBox/>
        </>
    );
}
export default RankTableSkeleton