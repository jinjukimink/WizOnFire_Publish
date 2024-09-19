import { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/ko';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { GrPrevious, GrNext } from "react-icons/gr";
import { CalendarHeader, CalendarBox, MonthSelector, StyledCalendarContainer, WeekdayHeader } from './GameCalendarStyles';
import Button from '../../../components/common/button/Button';
import colors from '../../../assets/Colors';
import useFetchData from '../../../hooks/useFetchData';
import KtEvent from './KtEvent';
import { useNavigate } from 'react-router-dom';
import AllEvent from './AllEvent';

moment.locale('ko');

const localizer = momentLocalizer(moment);


export type TSchedule = {
  home: string;
  homeLogo?: string;
  visitLogo?: string;
  outcome?: string;
  gtime?: string;
  stadium?: string;
  broadcast?: string;
  displayDate: string;
  visit?: string;
  visitScore?:string;
  homeScore?:string;

  gameDate?:string;
  gmkey?:string;
};

export type TscheduleList = {
  data: {
    list: TSchedule[];
  };
};


export type TEvent ={
  start: Date;
  end: Date;
  // allDay: boolean;
  home?: string;
  homeLogo?: string;
  visitLogo?: string;
  outcome?: string;
  gtime?: string;
  stadium?: string;
  broadcast?: string;
  displayDate?:string;

  visit?: string;
  visitScore?:string;
  homeScore?:string;

  gameDate?:string;
  gmkey?:string;
}

const CalendarComponent = () => {
  const [currentDate, setCurrentDate] = useState(new Date()); // 현재 날짜 
  const [events, setEvents] = useState<TEvent[]>([]);
  const [isKt,setIsKt] = useState(true);
  const navigate = useNavigate();

  // const yearMonth = moment(currentDate).format('YYYYMM');

  // moment를 사용하지 않고 날짜 포맷팅 (apiUrl)
  const formatYearMonth = (date: Date): string => {
    const year = date.getFullYear(); 
    const month = String(date.getMonth() + 1).padStart(2, '0');
    return `${year}${month}`;
  }

  const yearMonth = formatYearMonth(currentDate);


  //const apiUrl = `game/monthschedule?yearMonth=${yearMonth}`;
  const apiUrl = isKt
    ? `game/monthschedule?yearMonth=${yearMonth}`
    : `game/allgameschedule?yearMonth=${yearMonth}`;


  const { data:scheduleList, error } = useFetchData<TscheduleList>(apiUrl);

  useEffect(() => {
    if (scheduleList && scheduleList.data.list) {
      const calendarEvents = scheduleList.data.list.map((schedule) => ({
        // title: `${schedule.home} vs ???`,
        start: new Date(`${schedule.displayDate.slice(0, 4)}-${schedule.displayDate.slice(4, 6)}-${schedule.displayDate.slice(6, 8)}T${schedule.gtime}:00`),
        end: new Date(`${schedule.displayDate.slice(0, 4)}-${schedule.displayDate.slice(4, 6)}-${schedule.displayDate.slice(6, 8)}T${schedule.gtime}:00`),
        home: schedule.home,
        homeLogo: schedule.homeLogo,
        visitLogo: schedule.visitLogo,
        outcome: schedule.outcome,
        gtime: schedule.gtime,
        stadium: schedule.stadium,
        broadcast: schedule.broadcast,
        visit:schedule.visit,
        visitScore:schedule.visitScore,
        homeScore: schedule.homeScore,

        gmkey: schedule.gmkey,
        gameDate: schedule.gameDate,
        
      }));
      setEvents(calendarEvents);
    }
    if (error) {
      console.error("schedule data fetch error", error);
    }
  }, [scheduleList, error]);

  // 월 변경 (offset: -1,1)
  const handleMonthChange = (offset: number) => {
    const newDate = moment(currentDate).add(offset, 'months').toDate();
    setCurrentDate(newDate);
  };

  // 홈이 kt 일때 배경색 변경
  const dayPropGetter = (date: { toDateString: () => string; }) => {
    const isHomeKt = events.some(event => 
      event.start.toDateString() === date.toDateString() && event.home === 'KT'
    );
    if (isHomeKt) {
      return {
      style: { backgroundColor: '#fff5f7' },
      };
    }
    return {};
  };
  
  return (
    <CalendarBox>
      <CalendarHeader>
        <div>
          <Button 
            border='none' 
            width='120px' 
            height='30px' 
            hoverColor='none' 
            hoverFontColor='none' 
            backgroundColor={isKt ? colors.redPrimary: colors.white} 
            fontColor={isKt ? colors.white : colors.black}
            onClick={()=>setIsKt(true)}
          >
            KT Wiz 경기
          </Button>
          <Button 
            border='none' 
            width='120px' 
            height='30px' 
            hoverColor='none' 
            hoverFontColor='none' 
            backgroundColor={!isKt ? colors.redPrimary: colors.white} 
            fontColor={!isKt ? colors.white : colors.black}
            onClick={()=>setIsKt(false)}
          >
            전체 리그
          </Button>
        </div>        
        <MonthSelector>
          <Button 
            border='none'  
            hoverColor='unset' 
            hoverFontColor='none' 
            backgroundColor='white' 
            onClick={() => handleMonthChange(-1)}
          >
            <GrPrevious size={25} />
          </Button>
          <span>{moment(currentDate).format('YYYY년 MM월')}</span>
          <Button 
            border='none'  
            hoverColor='unset' 
            hoverFontColor='none' 
            backgroundColor='white' 
            onClick={() => handleMonthChange(1)}
          >
            <GrNext size={25} />
          </Button>
        </MonthSelector>
      </CalendarHeader>

      <WeekdayHeader>
        <span style={{ color: colors.redPrimary }}>일</span>
        <span>월</span>
        <span>화</span>
        <span>수</span>
        <span>목</span>
        <span>금</span>
        <span>토</span>
      </WeekdayHeader>

      <StyledCalendarContainer>
        <Calendar
          localizer={localizer}
          events={events}
          defaultView="month"
          date={currentDate}
          //onNavigate={date => setCurrentDate(date)}
          onSelectEvent={(event: TEvent) => {
            navigate(`/game/regular/boxscore/${event.gameDate}/${event.gmkey}`)} // 임시 경로 지정
          }
          //캘린더 이벤트 커스터마이징
          components={{
            event: isKt ? KtEvent : AllEvent,
          }}
          dayPropGetter={isKt ? dayPropGetter : undefined}
         style={{ height: '100%' }} 
        />
      </StyledCalendarContainer>
    </CalendarBox>
  );
};

export default CalendarComponent;
