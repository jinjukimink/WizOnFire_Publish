import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'; // 기본 스타일 적용

// moment를 로컬라이저로 설정
const localizer = momentLocalizer(moment);

const GameCalendar = () => {

    return (
        <div style={{ height: 600, marginTop:"40px"}}>
        < Calendar
        localizer={localizer}
        events={[]} // 이벤트를 비워두면 달력만 표시됩니다.
        startAccessor="start"
        endAccessor="end"
        defaultView="month" // 기본 뷰를 월별로 설정
      />
        </div>
    );
}

export default GameCalendar
