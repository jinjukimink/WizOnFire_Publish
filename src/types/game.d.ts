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
    "gday"?: string;
    "gmkey"?: string;
    "how": string;
    "result": string;
    "seq"?: number;
}

export type ThbattersAndvbatters = {
    "ab": number;
    "accmAb": number;
    "accmHit": number;
    "changeinn": string;
    "gday":string;
    "gmkey":string;
    "hit": number;
    "inn1"?: string;
    "inn10"?: string;
    "inn11"?: string;
    "inn12"?: string;
    "inn13"?: string;
    "inn14"?: string;
    "inn15"?: string;
    "inn16"?: string;
    "inn17"?: string;
    "inn18"?: string;
    "inn19"?: string;
    "inn2"?: string;
    "inn20"?: string;
    "inn21"?: string;
    "inn22"?: string;
    "inn23"?: string;
    "inn24"?: string;
    "inn25"?: string;
    "inn3"?: string;
    "inn4"?: string;
    "inn5"?: string;
    "inn6"?: string;
    "inn7"?: string;
    "inn8"?: string;
    "inn9"?: string;
    "name": string;
    "oneturn": string;
    "pcode": string;
    "position": string;
    "rbi": number;
    "run": number;
    "tb": string;
    "turn": string;
    "battingAverage"?: number; //타율계산
}


export type ThpitchersAndvpitchers = {
    "ab": number;
    "accmEr": number;
    "accmInn2": number;
    "bbhp": number;
    "bf": number;
    "changeinn": string;
    "er": number;
    "game":number;
    "gday": string;
    "gmkey":string;
    "hit":number;
    "hr": number;
    "inn": string;
    "kk": number;
    "l": number;
    "name":string;
    "pa": number;
    "pcode": string;
    "pos": string;
    "r": number;
    "s": number;
    "tb": string;
    "w": number;
    "wls": string;
    "accmErFormatted": string;
}

export type Tschedule = {
    current?: TCurrentAndPrevInfo;
    prev?: TCurrentAndPrevInfo;
    next?: TCurrentAndPrevInfo;
}

export type TScheduleInfo = {
    "broadcast": string;
    "cancelFlag": string;
    "crowdCn": number;
    "endFlag": string;
    "game": string;
    "gameDate": string;
    "gday": number;
    "gmkey": string;
    "gmonth": number;
    "gtime": string;
    "gyear": string;
    "home": string;
    "homeKey": string;
    "hscore": number;
    "stadium": string;
    "stadiumKey": string;
    "visit": string;
    "visitKey": string;
    "vscore": number;
    "homeLogo": string;
    "visitLogo": string;
}

export type TScoreboard = {
    "ballfour": string;
    "bhome": number;
    "bhomeName": string;
    "error": string;
    "gameDate": number;
    "hit": string;
    "run": string;
    "score1": string;
    "score2": string;
    "score3": string;
    "score4": string;
    "score5": string;
    "score6": string;
    "score7": string;
    "score8": string;
    "score9": string;
    "score10": string;
    "score11": string;
    "score12": string;
}
