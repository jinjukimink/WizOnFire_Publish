import { TRecent5RecordProps, TTotalRecordProps } from './player.d';
export type TRegularLeagueProps={
    era: string;           // 평균 자책점 (ex. "4.62")
    gamenum: number;       // 경기수 (ex. 26)
    cg: number;            // 완투 (ex. 0)
    sho: number;           // 완봉 (ex. 0)
    w: number;             // 승 (ex. 0)
    l: number;             // 패 (ex. 1)
    sv: number;            // 세이브 (ex. 1)
    hold: number;          // 홀드 (ex. 4)
    wp: string;            // 승률 (ex. "0.000")
    bf: number;            // 타자 (ex. 110)
    tugucount: number;     // 투구수 (ex. 417)
    innDisplay: string;    // 이닝 (ex. "25 1/3")
    hit: number;           // 피안타 (ex. 27)
    hr: number;            // 피홈런 (ex. 4)
    sfi: number;           // 희비 (ex. 0)
    sh: number;            // 희타 (ex. 2)
    bb: number;            // 볼넷 (ex. 7)
    ib: number;            // 고의4구 (ex. 1)
    hp: number;            // 사구 (ex. 1)
    kk: number;            // 탈삼진 (ex. 23)
    wra: number;            // 승률 (ex. 3)
    bk: number;            
    r: number;             
    er: number;            
    bs: number;            
    whip: string;          
    oavg: string;          
    qs: number;            
    kbb: string;           
}

export type TRecent5RecordProps={
    bb: number;               // Base on balls (walks)
    displayDate: string;      // Date display format, e.g. "09.14"
    er: number;               // Earned runs
    hit: number;              // Hits
    hp: number;               // Hit by pitch
    hr: number;               // Home runs
    inn2: number;             // Total innings pitched (in thirds of an inning, e.g. 18 is 6 full innings)
    innDisplay: string;       // Displayed innings, e.g. "6"
    kk: number;               // Strikeouts
    matchTeamCode: string;    // Opponent team code
    matchTeamName: string;    // Opponent team name
    oavg: string;             // Opponent's batting average
    pa: number;               // Plate appearances
    r: number;                // Runs allowed
    sv: number;               // Saves
    wl: string;               // Win-loss record, e.g. "0-1"
    wls: string;              // Win/loss/save status, e.g. "L" for loss
}
export type TRecent5Records=TRecent5RecordProps[];

export type TTotalRecordProps={
    bb: number;               // Walks (Base on balls)
    bf: number;               // Batters faced
    er: number;               // Earned runs
    era: string;              // Earned run average (ERA)
    gamenum: number;          // Number of games played
    gyear: string;            // Year of the season
    hit: number;              // Hits allowed
    hold: number;             // Holds
    hp: number;               // Hit by pitch
    hr: number;               // Home runs allowed
    inn2: number;             // Innings pitched (in thirds of an inning)
    innDisplay: string;       // Innings pitched display
    kk: number;               // Strikeouts
    l: number;                // Losses
    r: number;                // Runs allowed
    sho: number;              // Shutouts
    sv: number;               // Saves
    teamCode: string;         // Team code
    teamName: string;         // Team name
    w: number;                // Wins
    wCg: number;              // Complete games won
    wra: string;              // Win ratio (likely as a string representation of a float)
}

export type TTotalRecords=TTotalRecordProps[];