import { useMemo } from 'react';
import { flexRender } from '@tanstack/react-table';
import { useTableWithoutApi } from '../../../hooks/useTableWithoutApi';
import { TRegularLeagueProps, TRegularLeagueProps_C } from '../../../types/player';
import { HitRecordHeaderCell, HitRecordTable, HitRecordRow, HitRecordCell } from '../../../pages/regular/boxScore/recordButton/hitRecords/HitRecordStyles';
import styled from 'styled-components';


export const TableWrapper = styled.div`
  width:1100px;
  justify-content: center;
  align-items: center;
  @media (max-width: 1200px) {
    max-width: 900px; 
  }
`;

const RegularSeasonRecord = ({ regularLeagueData, isCatcher }: { regularLeagueData: TRegularLeagueProps | TRegularLeagueProps_C, isCatcher: boolean }) => {

  // 첫 번째 줄 컬럼을 isCatcher에 따라 분리
  const firstRowColumns = useMemo(() => {
    return isCatcher ? [
      { header: '타율', accessorKey: 'babip' },    // Batting Average
      { header: '경기수', accessorKey: 'gamenum' }, // Games Played
      { header: '타석', accessorKey: 'pa' },        // Plate Appearances
      { header: '타수', accessorKey: 'ab' },        // At-Bats
      { header: '득점', accessorKey: 'run' },       // Runs
      { header: '안타', accessorKey: 'hit' },       // Hits
      { header: '2루타', accessorKey: 'h2' },       // Doubles
      { header: '3루타', accessorKey: 'h3' },       // Triples
      { header: '홈런', accessorKey: 'hr' },        // Home Runs
      { header: '타점', accessorKey: 'rbi' },       // RBIs
      { header: '도루', accessorKey: 'sb' },        // Stolen Bases
      { header: '도실', accessorKey: 'cs' },        // Caught Stealing
      { header: '희타', accessorKey: 'sh' },        // Sacrifice Hits
      { header: '희비', accessorKey: 'sf' },        // Sacrifice Fly
    ] : [
      { header: '평균 자책점', accessorKey: 'era' },
      { header: '경기수', accessorKey: 'gamenum' },
      { header: '완투', accessorKey: 'cg' },
      { header: '완봉', accessorKey: 'sho' },
      { header: '승', accessorKey: 'w' },
      { header: '패', accessorKey: 'l' },
      { header: '세이브', accessorKey: 'sv' },
      { header: '홀드', accessorKey: 'hold' },
      { header: '승률', accessorKey: 'wra' },
      { header: '타자', accessorKey: 'bf' },
      { header: '투구수', accessorKey: 'tugucount' },
      { header: '이닝', accessorKey: 'innDisplay' },
      { header: '피안타', accessorKey: 'hit' },
      { header: '피홈런', accessorKey: 'hr' },
      //{ header: '',id:'empty', accessorKey: '', enableSorting: false, cell: () => null }, // 빈열 추가   
    ];
  }, [isCatcher]);

  // 두 번째 줄 컬럼을 isCatcher에 따라 분리
  const secondRowColumns = useMemo(() => {
    return isCatcher ? [
      { header: '볼넷', accessorKey: 'bb' },        // Walks
      { header: '고의4구', accessorKey: 'ib' },     // Intentional Walks
      { header: '사구', accessorKey: 'hp' },        // Hit by Pitch
      { header: '삼진', accessorKey: 'kk' },        // Strikeouts
      { header: '병살', accessorKey: 'gd' },        // Grounded into Double Plays
      { header: '장타율', accessorKey: 'slg' },     // Slugging Percentage
      { header: '출루율', accessorKey: 'bra' },     // On-Base Percentage
      { header: '실책', accessorKey: 'e' },         // Errors
      { header: '도루성공률', accessorKey: 'sbRate' }, // Stolen Base Success Rate
      { header: 'BB/K', accessorKey: 'bbkk' },      // Walk-to-Strikeout Ratio
      { header: '장타/안타', accessorKey: 'xbhrun' }, // Extra-Base Hits per Hit
      { header: 'OPS', accessorKey: 'ops' },        // OPS (On-base Plus Slugging)
      { header: '득점권 타율', accessorKey: 'spHra' }, // Batting Average with Runners in Scoring Position
      //{ header: '',id:'empty', accessorKey: '', enableSorting: false, cell: () => null }, // 빈열 추가   
    ] : [
      { header: '희비', accessorKey: 'sfi' },
      { header: '희타', accessorKey: 'sh' },
      { header: '볼넷', accessorKey: 'bb' },
      { header: '고의4구', accessorKey: 'ib' },
      { header: '사구', accessorKey: 'hp' },
      { header: '탈삼진', accessorKey: 'kk' },
      { header: '폭투', accessorKey: 'wra' },
      { header: '보크', accessorKey: 'bk' },
      { header: '실점', accessorKey: 'r' },
      { header: '자책점', accessorKey: 'er' },
      { header: '블론 세이브', accessorKey: 'bs' },
      { header: 'WHIP', accessorKey: 'whip' },
      { header: '피안타율', accessorKey: 'oavg' },
      { header: 'QS', accessorKey: 'qs' },
      { header: 'K/BB', accessorKey: 'kbb' },
    ];
  }, [isCatcher]);

  const handleData = (data: any):any => {
  return !isCatcher?{
    era: data.era ?? 0,                  // 평균 자책점
    gamenum: data.gamenum ?? 0,          // 경기수
    cg: data.cg ?? 0,                    // 완투
    sho: data.sho ?? 0,                  // 완봉
    w: data.w ?? 0,                      // 승
    l: data.l ?? 0,                      // 패
    sv: data.sv ?? 0,                    // 세이브
    hold: data.hold ?? 0,                // 홀드
    wp: data.wp ?? 0,                    // 승률
    bf: data.bf ?? 0,                    // 타자
    tugucount: data.tugucount ?? 0,      // 투구수
    innDisplay: data.innDisplay ?? "0",  // 이닝 (문자열로 표시되는 값일 가능성이 크므로 0을 문자열로 반환)
    hit: data.hit ?? 0,                  // 피안타
    hr: data.hr ?? 0,                    // 피홈런
    sfi: data.sfi ?? 0,                  // 희비
    sh: data.sh ?? 0,                    // 희타
    bb: data.bb ?? 0,                    // 볼넷
    ib: data.ib ?? 0,                    // 고의4구
    hp: data.hp ?? 0,                    // 사구
    kk: data.kk ?? 0,                    // 탈삼진
    wra: data.wra ?? 0,                    // 폭투
    bk: data.bk ?? 0,                    // 보크
    r: data.r ?? 0,                      // 실점
    er: data.er ?? 0,                    // 자책점
    bs: data.bs ?? 0,                    // 블론 세이브
    whip: data.whip ?? 0,                // WHIP (이닝당 안타와 볼넷 허용률)
    oavg: data.oavg ?? 0,                // 피안타율
    qs: data.qs ?? 0,                    // QS (퀄리티 스타트)
    kbb: data.kbb ?? 0,                  // K/BB 비율
  }
  :{
    ab: data.ab ?? 0,                    // 타수
    babip: data.babip ?? "0",            // 타율 (BABIP)
    bb: data.bb ?? 0,                    // 볼넷
    bbkk: data.bbkk ?? "0",              // BB/K 비율
    bra: data.bra ?? "0",                // Batting Runs Above Average
    cs: data.cs ?? 0,                    // 도실 (Caught Stealing)
    finalHit: data.finalHit ?? 0,        // Final Hit
    gamenum: data.gamenum ?? 0,          // 경기수
    gd: data.gd ?? 0,                    // 병살 (Grounded into Double Play)
    gyear: data.gyear ?? "0",            // 연도 (Game Year)
    h2: data.h2 ?? 0,                    // 2루타
    h3: data.h3 ?? 0,                    // 3루타
    hit: data.hit ?? 0,                  // 안타 (Hits)
    hp: data.hp ?? 0,                    // 사구 (Hit by Pitch)
    hr: data.hr ?? 0,                    // 홈런 (Home Runs)
    hra: data.hra ?? "0",                // 홈런 비율 (Home Runs Average)
    ib: data.ib ?? 0,                    // 고의4구 (Intentional Walks)
    kk: data.kk ?? 0,                    // 삼진 (Strikeouts)
    ops: data.ops ?? "0",                // OPS (On-base Plus Slugging)
    opsPlus: data.opsPlus ?? "0",        // OPS+
    pa: data.pa ?? 0,                    // 타석 (Plate Appearances)
    pcode: data.pcode ?? "",             // 선수 코드 (Player Code)
    rbi: data.rbi ?? 0,                  // 타점 (RBIs)
    run: data.run ?? 0,                  // 득점 (Runs)
    sb: data.sb ?? 0,                    // 도루 (Stolen Bases)
    sbTryCn: data.sbTryCn ?? 0,          // 도루 시도 (Stolen Base Attempts)
    sba: data.sba ?? "0",                // 도루 성공률 (Stolen Base Average)
    sf: data.sf ?? 0,                    // 희비 (Sacrifice Fly)
    sh: data.sh ?? 0,                    // 희타 (Sacrifice Hit)
    slg: data.slg ?? "0",                // 장타율 (Slugging Percentage)
    spHra: data.spHra ?? "0",            // 특정 홈런 비율 (Specific Home Run Average)
    war: data.war ?? "0",                // 대체 승리 기여도 (Wins Above Replacement)
    winShares: data.winShares ?? "0",    // Win Shares
    woba: data.woba ?? "0",              // 가중 출루율 (Weighted On-base Average)
    wrHit: data.wrHit ?? "0",            // wRC+ (Weighted Runs Created Plus)
    wraa: data.wraa ?? "0",              // wRAA (Weighted Runs Above Average)
    xbhrun: data.xbhrun ?? "0/0",        // 장타/홈런 (Extra-base Hits / Home Runs)
  };
};

  // 첫 번째 줄 테이블
  const firstRowTable = useTableWithoutApi<TRegularLeagueProps | TRegularLeagueProps_C>({
    data: [regularLeagueData],
    columnDefs: firstRowColumns,
    transformData: handleData,
  });

  // 두 번째 줄 테이블
  const secondRowTable = useTableWithoutApi<TRegularLeagueProps | TRegularLeagueProps_C>({
    data: [regularLeagueData],
    columnDefs: secondRowColumns,
    transformData: handleData,
  });

  return (
    <>
      <TableWrapper>
        <HitRecordTable>
          {/* 첫 번째 줄 헤더 */}
          <thead>
            {firstRowTable.getHeaderGroups().map((headerGroup) => (
              <HitRecordRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <HitRecordHeaderCell key={header.id} colSpan={header.colSpan}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </HitRecordHeaderCell>
                ))}
              </HitRecordRow>
            ))}
          </thead>
          <tbody>
            {/* 첫 번째 줄 데이터 */}
            {firstRowTable.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <HitRecordCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </HitRecordCell>
                ))}
              </tr>
            ))}
          </tbody>

          {/* 두 번째 줄 헤더 */}
          <thead>
            {secondRowTable.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <HitRecordHeaderCell key={header.id} colSpan={header.colSpan}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </HitRecordHeaderCell>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {/* 두 번째 줄 데이터 */}
            {secondRowTable.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <HitRecordCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </HitRecordCell>
                ))}
              </tr>
            ))}
          </tbody>
        </HitRecordTable>
      </TableWrapper>
    </>
  );
};

export default RegularSeasonRecord;
