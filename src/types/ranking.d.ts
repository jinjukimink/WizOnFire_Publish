// 2024 시즌 팀 순위
export type TTotalTeamRankResponse = {
    data: {
        list ?: TTotalTeamRankType[];
    }
};

export type TTotalTeamRankType = {
    date: string;
    rank: number;
}

// 2024 시즌 팀 기록
export type TTeamRankResponse = {
    data: {
        list ?: TTeamRankType[];
    }
};

export type TTeamRankType = {
    ab: number;
    bra: string;
    continue1: string;
    drawn: number;
    er: number;
    era?: string;
    game: number;
    gameFlag?: number;
    gb?: string;
    gyear?: string;
    hr: number;
    hra: string;
    lastrank?: number;
    lose: number;
    lra: string;
    r: number;
    rank: number;
    run: number;
    sb?: number;
    teamCode?: string;
    teamName: string;
    teamNameEng?: string;
    win: number;
    wra: string;
};

//2024 투수기록
export type TPitRankResponse = {
    data: {
        list ?: TPitRankType[];
    }
};

export type TPitRankType = {
    ab?: number;
    bb: number; 
    bb9?: number;
    bbhp?: number;
    bk: number; 
    bs: number;
    cg?: number;
    cs?: number;
    er: number;
    era?: string;
    err?: number;
    gd?: number;
    gyear?: string;
    h2?: number;
    h3?: number;
    hit?: number;
    hit9?: number;
    hold?: number;
    hp: number;
    hr?: number;
    ib: number;
    inn?: number;
    iso?: string;
    kk: number;
    kk9?: number;
    oavg?: string;
    obp?: string;
    oops?: string;
    oslg?: string;
    pa?: number;
    qs: number;
    r: number;
    sb?: number;
    sf: number;
    sh: number;
    sho?: number;
    sv?: number;
    teamCode: string;
    teamName: string;
    tugucount?: number;
    tugucountinn?: number;
    whip: string;
    wp: number;
    wra?: string;
};

//2024 타자기록
export type TBattRankResponse = {
    data: {
        list ?: TBattRankType[];
    }
};

export type TBattRankType = {
    ab?: number;
    bb: number;
    bbhp?: number;
    bbkk?: string;
    bra: string;
    cs?: number;
    der?: string;
    err: number;
    gd: number;
    gyear?: string;
    h2: number;
    h3: number;
    hit: number;
    hp: number;
    hr: number;
    hra: string;
    hrab?: number;
    ib: number;
    iso?: string;
    kk: number;
    kkab?: number;
    ops: string;
    pa?: number;
    rbi: number;
    run?: number;
    sb: number;
    sbTryCn?: number;
    sba?: string;
    sf?: number;
    sh?: number;
    slab?: number;
    slg: string;
    teamCode?: string;
    teamName: string;
}

//2024 시즌 팀 간 승패표
export type TTeamMatchupResponse = {
    data: {
        list: TTeamMatchupType[]; 
    };
};

export type TTeamMatchupType = {
        drawn: number;      
        lose: number;      
        teamCode: string;   
        teamName: string;    
        vsTeamCode: string;  
        win: number;    
};

export type TTeamMatchupTableType = {
    teamName: string;
    [key: string]: string;  // vsTeamCode = key, 승-패-무 값
};

//투수순위
export type TPitcherResponse = {
    data: {
        list: TPitcherRankType[]; 
    };
};

export type TPitcherRankType = {
    playerName: string;      
    teamName: string;        
    era: string;            
    gamenum: number;        
    w: number;              
    l: number;              
    sv: number;             
    hold: number;           
    whip?: string;           
    inn: number;             
    hit: number;            
    hr: number;             
    bb: number;              
    hp: number;             
    kk: number;             
    r: number;               
    er: number;             
    [key: string]: any;
};

//타자순위
export type TBatterResponse = {
    data: {
        list: TBatterRankType[]; 
    };
};

export type TBatterRankType = {
    playerName: string;
    teamName: string;
    gamenum: number;
    ab: number;
    run: number;
    hit: number;
    h2: number;
    h3: number;
    hr: number;
    rbi: number;
    sb: number;
    bb: number;
    hp: number;
    kk: number;
    slg: string;
    ops: string;
    [key:string]: any;
};

//2024 시즌 관중기록
export type TAudienceResponse = {
    data: {
        list: TAudienceType[]; 
    };
};

export type TAudienceType = {
    crowd: number;
    game: number;
    teamCode: string;
    teamName: string;
    [key:string]: any;
};



