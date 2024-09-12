import baseballIcon from "../../assets/images/ktwiz/baseballIcon.png"
import { Divider, Hist, Layout, LeftBox, RightBox, Title } from "./HistoryStyles";

const LeftItem = ({ year, children }  : {year?:string; children?:React.ReactNode}) =>(
  <Layout align="left">
  <Title>
      <img src={baseballIcon} width="45px" height="45px" alt="야구공 아이콘" style={{position: 'relative', bottom: '-25px', left: '-20px', zIndex: 1}}/>
      <span style={{position: 'relative', left: '-10px', fontSize:'20px'}}>{year}</span>
  </Title>
  <LeftBox>
    <div style={{ lineHeight: '1.8', fontSize:'15px',color:'gray' }}>
      {children}
    </div>
  </LeftBox>
  </Layout>
)

const RightItem = ({ year, children }  : {year?:string; children?:React.ReactNode}) =>(
  <Layout align="right">
  <Title>
      <img src={baseballIcon} width="45px" height="45px" alt="야구공 아이콘" style={{position: 'relative', bottom: '-25px', left: '-20px', zIndex: 1}}/>
      <span style={{position: 'relative', left: '-10px', fontSize:'20px'}}>{year}</span>
  </Title>
  <RightBox>
    <div style={{ lineHeight: '1.8', fontSize:'15px' , color:'gray'}}>
      {children}
    </div>
  </RightBox>
  </Layout>
)   

const History = () => {
  return (
    <Divider>
        <Hist>
          <LeftItem year="2013">
            kt sports 독립법인 출범<br/>
            kt wiz 프로야구단 창단
          </LeftItem>
          <RightItem year="2014">
            kt sports 독립법인 출범<br/>
            kt wiz 프로야구단 창단
          </RightItem>
          <LeftItem year="2015">
            kt wiz 프로야구단 1군리그 데뷔<br/>
            kt wiz 공식 어플리케이션 wizzap(위잽) 출시<br/>
            kt wiz 정규리그 첫 승(vs 넥센)<br/>
            장성호 2,100안타 달성(KBO 통산안타 2위)<br/>
            kt wiz 신생구단 창단 최다관중 신기록 달성(53만 1696명)
          </LeftItem>
          <RightItem year="2016">
            kt wiz 수도권 더비 'W-Match' 개최(vs SK)<br/>
            kt wiz 통산 100승 달성 <br/>
            kt wiz 김진욱 2대 감독 취임
          </RightItem>
          <LeftItem year="2017">
            케이티 위즈파크 증축(2만 2천석)<br/>
            이진영 통산 2천 경기-2천 안타 달성(KBO 역대 5번째)<br/>
            제 1회 kt wiz - SK Wyverns 드림 야구대회 개최<br/>
            kt wiz 위안부 피해 할머니(이옥선,박옥선) 시구/시타 및 후원
          </LeftItem>
          <RightItem year="2018">
            <p>
              <strong>Kt wiz 2018 스포노믹스 대상 수상</strong><br/>
              -연고지 상생과 차별화된 팬서비스로, 프로스포츠 구단 부문 대상 수상
            </p>
            <p>
              <strong>케이티 위즈 파크, KBO 최초 미세먼지 측정/저감 캠페인 시행</strong><br/>
              -IoT(사물인터넷) 기반으로 공기질 정보 제공 및 미세먼지 저감 활동 추진
            </p>
           <p> <strong>2018 자카르타-팔렘방 아시안게임에서 황재균(야구) 금메달</strong> </p>
           <p>
            <strong> kt wiz 이강철 3대 감독 취임</strong><br/>
            -KBO 역대 최고 언더핸드 투수 출신으로, 두산 수석코치를 역임한 이강철 감독 선임
           </p>
           <p>
            <strong>kt wiz 강백호 구단 최초 KBO 신인상 수상</strong><br/>
            -KBO 역대 고졸 신인 최다 홈런(29개)을 기록하는 등 뛰어난 활약으로 압도적 선정
           </p>         
          </RightItem>
          <LeftItem year="2019">
            위즈파크 5G 스타디움 개관식<br/>
            구단 창단 최초 9연승 달성<br/>
            쿠에바스 구단 최다승 갱신(13승)<br/>
            배제성 구단 최초 국내선수 두자리 승수 달성<br/>
            창단 첫 5할 승률로 시즌 마감(71승 2무 71패)<br/>
            로하스 KBO 외야수 골든글러브 수상<br/>
            대한민국 스포츠산업대상(대통령상) 수상
          </LeftItem>
          <RightItem year="2020">
            데스파이네 구단 최다승 경신(14승)<br/>
            정규리그 2위 및 포스트시즌 진출 확정 (81승 62패)<br/>
            창단 첫 플레이오프 출전<br/>
            2020 KBO리그 로하스 MVP 및 소형준 신인왕 수상 (KBO 역대 6번째)<br/>
            황재균, 로하스, 강백호 2020 KBO 골든글러브 수상
          </RightItem>
          <LeftItem year="2021">
            이강철 감독 200승 달성 (KBO 역대 31번째)<br/>
            김재윤 구단 최초 통산 100세이브 달성 (KBO 역대 17번째)<br/>
            창단 최초 시즌 70승 선점<br/>
            1위 결정전 승리로 창단 첫 정규시즌 우승<br/>
            한국시리즈 4전 전승으로 창단 첫 통합 우승
          </LeftItem>
          <RightItem year="2022">
            박병호 9년 연속 20홈런 (KBO 최초)<br/>
            팀 10,000안타<br/>
            팀 1,000홈런<br/>
            이강철 감독 300승 (KBO 역대 20번째)<br/>
            3년 연속 포스트시즌 진출<br/>
            2022 KBO 시상식 &lt;박병호 홈런상, 엄상백 승률상&gt;<br/>
            2022 KBO 골든글러브 &lt;박병호 1루수&gt;
          </RightItem>
          <LeftItem year="2023">
            <p>            
              kt wiz 창단 10주년<br/>
              7.11 김재윤 kt 최초 150세이브 (역대 9번째)<br/>
              9.20 쿠에바스 KBO 8월 월간 MVP 수상<br/>
              10.7 강백호, 박영현 2022 항저우 아시안게임 금메달<br/>
              10.10 정규리그 2위 및 4년 연속 포스트시즌 진출 확정 (79승 62패)
            </p>
            <p>            
              10.10 구단 한 시즌 역대 최다 관중 달성 (697,350명)<br/>
              - 종전 : 2017년 686,541명
            </p>
            <p>11.13 한국시리즈 준우승</p>
            <p>
            11.27 2023 KBO 시상식<br/>
            -쿠에바스 승률상<br/>
            -박영현 홀드상<br/>
            -박병호 수비상 1루수
            </p>
          </LeftItem>

        </Hist>
    </Divider>
  );
}
export default History 