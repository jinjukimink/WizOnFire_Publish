import { AiFillHome } from "react-icons/ai";
import { MdArrowForwardIos } from "react-icons/md";
import {PageLocationContainer, PageLocationBox , PageLocationInfo} from "./PageLocationStyles"
import { useLocationStore } from "../../../stores/useLocation.store";



const PageLocation = () => {
  /* 메모이제이션 try,,,,
  const category = useLocationStore((state) => state.selectedCategory)
  const subCategory = useLocationStore((state) => state.selectedSubCategory)
  const sidebar = useLocationStore((state) => state.selectedSidebar)
  */

  const { selectedCategory, selectedSubCategory, selectedSidebar} = useLocationStore();

  return (
    <PageLocationContainer>
      <PageLocationBox>
        <PageLocationInfo>
          <span><AiFillHome /></span>
          <span>Home</span>
          <span><MdArrowForwardIos /></span>
          <span>{selectedCategory}</span>
          <span><MdArrowForwardIos /></span>
          <span>{selectedSubCategory}</span>
          {selectedSidebar !== null ? (
              <>
                <span><MdArrowForwardIos /></span>
                <span>{selectedSidebar}</span>
              </>
            ) : null }
        </PageLocationInfo>
      </PageLocationBox>
    </PageLocationContainer>
  );
}
export default PageLocation;