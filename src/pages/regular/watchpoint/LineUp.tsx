import { TeamWrapper, TeamLogo, FieldWrapper, PlayerPosition, PlayerInfo, LineUpBox } from "./LineUpStyles";

const positions: { [key: string]: { top: string; left: string } } = {
    "1": { top: '55%', left: '50%' }, 
    "2": { top: '80%', left: '50%' }, 
    "3": { top: '60%', left: '80%' }, 
    "4": { top: '45%', left: '75%' }, 
    "5": { top: '65%', left: '25%' }, 
    "6": { top: '48%', left: '28%' }, 
    "7": { top: '37%', left: '20%' }, 
    "8": { top: '25%', left: '50%' }, 
    "9": { top: '30%', left: '80%' }, 
    "D": { top: '78%', left: '15%' }, 
};
const positionMapping: { [key: string]: string } = {
  "1": "P",
  "2": "C",
  "3": "1B",
  "4": "2B",
  "5": "3B",
  "6": "SS",
  "7": "LF",
  "8": "CF",
  "9": "RF",
  "D": "DH"
};



const LineUp = ({ lineup, logo }: { lineup: { pos: string; playerName: string }[]; logo: string }) => { // pos 타입을 string으로 변경
    return (
        <>
        <LineUpBox>
        <TeamLogo src={logo} alt="Team Logo" />
       <TeamWrapper>
        <FieldWrapper>
          {lineup.map((player, index) => (
            
            <PlayerPosition
              key={index} 
              top={positions[player.pos]?.top || '50%'}
              left={positions[player.pos]?.left || '50%'}
            >
              <PlayerInfo>
              {positionMapping[player.pos] || player.pos}. {player.playerName}
              </PlayerInfo>
            </PlayerPosition>
          ))}
        </FieldWrapper>

      </TeamWrapper>
      </LineUpBox>
      </>
    );
  };

  export default LineUp