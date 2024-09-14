import styled, { keyframes } from "styled-components";
import { Container } from "../../../pages/PagesStyles";

const loadingAnimation = keyframes`
    100% {
        background-position: -100% 0;
    }
`;

export const Shining = styled.span`
  background: linear-gradient(
    120deg,
    #e5e5e5 30%,
    #f0f0f0 38%,
    #f0f0f0 40%,
    #e5e5e5 48%
  );
  background-size: 200% 100%;
  background-position: 100% 0;
  animation: ${loadingAnimation} 1s infinite;
`;

const SkeletonLine = styled(Shining)<{ visible: boolean }>`
  height: 1.5rem;
  border-radius: 1rem;
  display: inline-block;
  background: ${({ visible }) => !visible && 'white'};
`;

const SkeletonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); //4열 맞추기
  gap: 24px; 
  margin-top: 0px;
`;

interface SkeletonPropsType {
  width?: string;
  height?: string;
  margin?: string;
  borderRadius?: string;
  visible?: boolean;
}

function Skeleton({
  width = "240px", 
  height = "275px", 
  margin = "0", 
  borderRadius = "0px", 
  visible = true,
}: SkeletonPropsType) {
  return (
    <SkeletonLine
      visible={visible}
      style={{ width, height, margin, borderRadius }}>
    </SkeletonLine>
  );
}

interface SkeletonGridProps {
  count: number;
}

export const SkeletonGridContainer = ({ count }: SkeletonGridProps) => {
  return (
<Container>

      <SkeletonGrid>
        {Array.from({ length: count }).map((_, index) => (
          <Skeleton key={index} />
        ))}
      </SkeletonGrid>

    </Container>  
  );
};

export default SkeletonGridContainer;

