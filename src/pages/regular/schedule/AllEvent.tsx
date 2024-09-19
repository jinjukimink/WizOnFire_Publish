import { useEffect, useState } from "react";
import styled from "styled-components"

const EventContainer = styled.div<{ isKt: boolean }>`
  width: 100%;
  text-align: left;
  margin-top: 4px;
  padding-left: 8px; 
  color: ${props => props.isKt ? 'red' : 'black'};
  font-size: 13px;
`;


const AllEvent = ({ event }: { event: any }) => {
    const [isKt, setIsKt] = useState(event.home === 'KT' || event.visit === 'KT');


    useEffect(() => {
        setIsKt(event.home === 'KT' || event.visit === 'KT');
    }, [event]);

    return (
      <EventContainer isKt = {isKt}>
        <span>{event.visit}</span>{event.visitScore} : <span>{event.home}</span>{event.homeScore} 
        [{event.stadium}]
      </EventContainer>
    );
  };

export default AllEvent
