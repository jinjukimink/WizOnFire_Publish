import styled from "styled-components";
import MenuBar from "./MenuBar";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Score from "./recordButton/score/Score";
import Modal from "../../../components/common/modal/Modal";

const BoxScoreContainer = styled.div`
    max-width: 1100px;
    width: 65%;
    font-size: 14px;
    box-sizing: border-box;
    margin: 0 auto;
`;

const BoxScore = () => {
    const [apiUrl, setApiUrl] = useState<string>("");
    const [modalOpen, setModalOpen] = useState(false);
    const { gameDate, gmkey } = useParams<string>();
    const { pathname } = useLocation();
    const navigate = useNavigate();
    
    useEffect(() => {
        if (!gameDate || !gmkey) {
            // 파라미터가 없을 때
            // setApiUrl('//game/boxscore.json');
            setApiUrl('//game/boxscore.json');
        } else {
            // 파라미터가 있을 때
            setApiUrl(`/game/boxscore-gameDate-${gameDate}-gmkey-${gmkey}.json`);
        }
    }, [gameDate, gmkey, pathname]);

    const handlePrevGameClick = (prevGameDate: string, preGmkey: string) => {
       //8/31 이전 데이터 볼 수 없게 설정하기
      if (pathname === '/game/regular/boxscore/20240904/20240904KTLT0' || prevGameDate === '20240904') {
        setModalOpen(true);
        return;
      }
          navigate(`/game/regular/boxscore/${prevGameDate}/${preGmkey}`);
    }

    const handleNextGameClick = (nextGameDate: string, nextGmkey: string) => {
        navigate(`/game/regular/boxscore/${nextGameDate}/${nextGmkey}`);
    };

    return (
      <>
      {modalOpen && <Modal setModalOpen={setModalOpen}/>}
        <BoxScoreContainer>
            <Score
                apiUrl={apiUrl}
                onPrevClick={handlePrevGameClick}
                onNextClick={handleNextGameClick}
                />
            <MenuBar apiUrl={apiUrl}/>
        </BoxScoreContainer>
      </>
    );
}
export default BoxScore;