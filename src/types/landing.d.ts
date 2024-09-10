type THotIssue = {
    artcContents: string;
    artcTitle : string;
    imgFilePath : string;
    viewCnt : number;
}

// type GameStatus = "1" | "3"; // "1"은 현재 진행 중, "3"은 완료됨 등의 상태를 나타낼 수 있습니다.

// type GameOutcome = "승" | "

type TGameData = {
    "displayDate"?: string;
    "game"?: string;
    "gameDate"?: number;
    "gday"?: number;
    "gmkey"?: string;
    "gmonth"?: number;
    "gtime"?: string;
    "gyear"?: string;
    "home"?: string;
    "homeFullname"?: string;
    "homeKey"?: string;
    "homeStarter"?: string;
    "matchTeamCode"?: string;
    "matchTeamName"?: string;
    "outcome"?: string;
    "stadium"?: string;
    "stadiumKey"?: string;
    "status"?: string;
    "visit"?: string;
    "visitFullname"?: string;
    "visitKey"?: string;
    "visitStarter"?: string;
    "visitScore"?: number,
    "homeScore"?: number,
}

type GameResponse  = {
    data: {
        current : TGameData;
        next : TGameData;
        prev : TGameData;
    }
}