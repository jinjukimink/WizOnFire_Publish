import styled from "styled-components";
import colors from "../../../assets/Colors";

const ModalWrapper = styled.div`
  width: 35%;
  height: 35%;
  top: 50%;
  left: 50%;
  position: fixed;
  text-align: center;
  align-content: center;
  background-color: ${colors.black};
  border-radius: 20px;
  transform: translate(-50%,-50%);
  color: ${colors.mediumIvory};
  border: 1px solid #fff;
  opacity: 75%;
  z-index: 45;

  p {
    font-size: 18px;
    strong{
      color: ${colors.white};
    }
  }
`

const ButtonModal = styled.button`
  width: 10%;
  height: auto;
  padding: 5px;
  margin-top: 20px;
  border-radius: 8px;
  border: none;
  background-color: ${colors.white};
  z-index: 45;
  &:hover {
    color: ${colors.ivory};
    background-color: ${colors.redPrimary};
  }
`


const Modal = ({setModalOpen} : { setModalOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {
  return (
      <ModalWrapper>
        {/* <p>해당 일자 이전부터 <strong>데이터 파일 (~ 8 / 31) </strong>은</p>
        <p>ktwiz의 저작권에 의해 열람이  <strong>불가능합</strong>니다</p> */}
        <p>ktwiz의 저작권에 의해 9월 4일부터 10월 11일까지의 데이터만 열람 가능합니다.</p>
        <ButtonModal onClick={()=>setModalOpen(false)}>닫기</ButtonModal>
      </ModalWrapper>
  );
}
export default Modal