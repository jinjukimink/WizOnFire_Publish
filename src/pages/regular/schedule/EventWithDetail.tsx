import styled from "styled-components";
import colors from "../../../assets/Colors";
import React from "react";

const EventContainer = styled.div`
  text-align: center;
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
`;

const Outcome = styled.span<{ outcome: string }>`
    width: 23px;
    height: 23px;
    font-size: 14px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    background-color: ${({ outcome }) => outcome === '승' ? colors.redPrimary : colors.black};
    color: white;
    border-radius: 3px;
    z-index: 1000;
    
`;
const GInfo = styled.div`
    color: ${colors.redPrimary};
    font-size: 14px;
    margin-bottom: 5px;

    p{
        color: ${colors.black};
        margin-top: 5px;
        font-size: 12px;
    }
`;


const EventWithDetails = ({ event }: { event: any }) => {
    return (
      <EventContainer>
        {event.outcome && (
          <div>
            <Outcome outcome={event.outcome}>
                {event.outcome}
            </Outcome>
          </div>
        )}
        {event.home === 'KT' && event.visitLogo && (
            <Logo 
              src={event.visitLogo} 
              alt={event.visit} 
            />
        )}
        {event.home !== 'KT' && event.homeLogo && (
            <Logo 
              src={event.homeLogo} 
              alt={event.home} 
            />
        )}
        <GInfo>
          {event.gtime} {event.stadium}
          <p>{event.broadcast}</p>
        </GInfo>
        </EventContainer>
    );
  };
  
  export default EventWithDetails;