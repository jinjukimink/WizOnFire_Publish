import { TTeamRankType } from "./ranking";

export type TBoxScoreResponse = {
    data: TBoxscoreData
}

export type TBoxscoreData = {
    etcgames: TEtcgame[];
    gameFlag?: string;
    hbatters: ThbattersAndvbatters[];
    hpitchers: ThpitchersAndvpitchers[];
    schedule: Tschedule;
    scoreboard: TScoreboard[];
    vbatters: ThbattersAndvbatters[];
    vpitchers: ThpitchersAndvpitchers[];
}

export type TEtcgame = {
    gday?: string;
    gmkey?: string;
    how: string;
    result: string;
    seq?: number;
}

//홈,원정팀 타자 
export type ThbattersAndvbatters = {
    ab: number;
    accmAb: number;
    accmHit: number;
    changeinn: string;
    gday:string;
    gmkey:string;
    hit: number;
    inn1?: string;
    inn10?: string;
    inn11?: string;
    inn12?: string;
    inn13?: string;
    inn14?: string;
    inn15?: string;
    inn16?: string;
    inn17?: string;
    inn18?: string;
    inn19?: string;
    inn2?: string;
    inn20?: string;
    inn21?: string;
    inn22?: string;
    inn23?: string;
    inn24?: string;
    inn25?: string;
    inn3?: string;
    inn4?: string;
    inn5?: string;
    inn6?: string;
    inn7?: string;
    inn8?: string;
    inn9?: string;
    name: string;
    oneturn: string;
    pcode: string;
    position: string;
    rbi: number;
    run: number;
    tb: string;
    turn: string;
    battingAverage?: number; //타율계산
}

//홈,원정팀 투수
export type ThpitchersAndvpitchers = {
    ab: number;
    accmEr: number;
    accmInn2: number;
    bbhp: number;
    bf: number;
    changeinn: string;
    er: number;
    game:number;
    gday: string;
    gmkey:string;
    hit:number;
    hr: number;
    inn: string;
    kk: number;
    l: number;
    name:string;
    pa: number;
    pcode: string;
    pos: string;
    r: number;
    s: number;
    tb: string;
    w: number;
    wls: string;
    accmErFormatted: string;
}

export type Tschedule = {
    current?: TCurrentAndPrevInfo;
    prev?: TCurrentAndPrevInfo;
    next?: TCurrentAndPrevInfo;
}

export type TScheduleInfo = {
    broadcast: string;
    cancelFlag: string;
    crowdCn: number;
    endFlag: string;
    game: string;
    gameDate: string;
    gday: number;
    gmkey: string;
    gmonth: number;
    gtime: string;
    gyear: string;
    home: string;
    homeKey: string;
    hscore: number;
    stadium: string;
    stadiumKey: string;
    visit: string;
    visitKey: string;
    vscore: number;
    homeLogo?: string;//지은 변경
    visitLogo?: string;//지은 변경
}

export type TScoreboard = {
    ballfour: string;
    bhome: number;
    bhomeName: string;
    error: string;
    gameDate: number;
    hit: string;
    run: string;
    score1: string;
    score2: string;
    score3: string;
    score4: string;
    score5: string;
    score6: string;
    score7: string;
    score8: string;
    score9: string;
    score10: string;
    score11: string;
    score12: string;
}

export type TWatchPointResponse = {
    data:TWatchPointData;
}

export type TWatchPointData = {
    gameScore?:TGameScore;
    homeLineup?:TLineUP[];
    homePitcher?:TPitcher;
    homeTeamRank?: TTeamRankType;
    homeTeamWinLose?: TTeamWinLose;
    schedule?: TScheduleFull;
    visitLineup?:TLineUp[];
    visitPitcher?:TPitcher;
    visitTeamRank?:TTeamRankType;
    visitTeamWinLose?:TTeamWinLose;
}

export type TGameScore = {
    bhomeName?: string;
    displayDate?: string;
    endFlag?: string;
    gameDate?: number;
    gmKey?: string;
    gtime?: string;
    hOutcome?: string;
    home?: string;
    homeKey?: string;
    homeLogo?: string;
    homeYn?: string;
    hpcode?: string;
    hpitcherName?: string;
    hscore?: number;
    inning?: number;
    stadium?: string;
    stadiumKey?: string;
    tbSc?: string;
    vOutcome?: string;
    visit?: string;
    visitKey?: string;
    visitLogo?: string;
    vpcode?: string;
    vpitcherName?: string;
    vscore?: number;
}

export type TLineUp = {
    backnum?: string;
    birth?: string;
    career?: string;
    curBra?: string;
    curHra?: string;
    height?: string;
    hittype?: string;
    money?: string;
    pcode?: string;
    playerName?: string;
    playerPrvwImg?: string;
    pos?: string;
    posidName?: string;
    position?: string;
    promise?: string;
    seq?: number;
    teamCode?: string;
    teamName?: string;
    weight?: string;
}
export type TPitcher = {
    babip?: string;
    bb?: number;
    bf?: number;
    bk?: number;
    bs?: number;
    er?: number;
    era?: string;
    err?: number;
    fip?: string;
    fo?: number;
    gamenum?: number;
    go?: number;
    gyear?: string;
    havg?: string;
    hit?: number;
    hold?: number;
    hp?: number;
    hr?: number;
    ib?: number;
    inn2?: number;
    innDisplay?: string;
    kbb?: string;
    kk?: number;
    l?: number;
    oavg?: string;
    pcode?: string;
    playerName?: string;
    qs?: number;
    qsPlus?: number;
    r?: number;
    ravg?: string;
    sf?: number;
    sh?: number;
    sho?: number;
    start?: number;
    sv?: number;
    svo?: number;
    tugucount?: number;
    turfSave?: number;
    w?: number;
    wCg?: number;
    war?: string;
    whip?: string;
    winShares?: string;
    wl?: string;
    wp?: number;
    wra?: string;
}

export type TTeamWinLose = {
    drawn?: number;
    lose?: number;
    teamCode?: string;
    teamName?: string;
    vsTeamCode?: string;
    win?: number;
}

export type TScheduleFull = {
    current?: TScheduleInfo;
    prev?: TScheduleInfo;
    next?: TScheduleInfo;
}