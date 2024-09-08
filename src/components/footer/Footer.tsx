import { logo_ko, facebook, instagram, naver, youtube } from "../../assets/assets"
import { FooterContainer, FooterBox, Logo, Info, InfoDetail, InfoNetwork, StyledLi} from "./FooterStyles"
import { RxGithubLogo } from "react-icons/rx";
import SelectBar from "../common/SelectBar";

const Footer = () => {

  const snsIcons = [
    {src: instagram, href: "https://www.instagram.com/ktwiz.pr/" ,alt: "Instagram" },
    { src: facebook, href: "https://www.facebook.com/ktwiz", alt: "Facebook" },
    { src: youtube, href: "https://www.youtube.com/c/ktwiztv", alt: "YouTube" },
    { src: naver, href: "https://tv.naver.com/ktwiz", alt: "Naver" }
  ];
  const options = [
    { label: 'KT estate', url: "https://www.ktestate.com/" },
    { label: 'KT telecom', url: "https://www.kttelecop.co.kr/" },
    { label: 'KT sat', url: "https://www.ktestate.com/" },
    { label: 'KT engineering', url: "https://www.ktestate.com/" },
    { label: 'KT is', url: "https://www.ktestate.com/" },
    { label: 'KT cs', url: "https://www.ktestate.com/" },
    { label: 'KT m&s', url: "https://www.ktestate.com/" },
    { label: 'KT linkus', url: "https://www.ktestate.com/" },
    { label: 'KT ds', url: "https://www.ktestate.com/" },
    { label: 'KT NexR', url: "https://www.ktestate.com/" },
  ];


  return (
    <FooterContainer>
      <FooterBox>
        <Logo src={logo_ko} alt="Logo_kor" />
        <Info>
          <ul>
            <StyledLi>
              <a href="https://github.com/WizOnFire/KT_Web">
                <RxGithubLogo />
              </a>
            </StyledLi>
            <li>개인정보 처리방침</li>
            <li>이용약관</li>
            <li>이메일무단수집거부</li>
            <li>Sitemap</li>
          </ul>
          <InfoDetail>
            <p>대표번호</p>
            <div>
              <span className="tel">1899-5916</span>
              <span className="timeInfo">운영시간 : 평일 10:00 ~ 18:00 / 주말 10:00 ~ 경기시작 전까지</span>
              <span className="timeInfo">월요일 및 주말 미경기 시 미운영</span>
            </div>
          </InfoDetail>
          <InfoDetail>
            <p>주소</p>
            <div>
              <span className="address">경기도 수원시 장안구 경수대로 (조원동) 수원 케이티 위즈파크</span>
            </div>
          </InfoDetail>
          <p>Copyright 2024 kt sports. All rights reserved.</p>
        </Info>
        <InfoNetwork>
          {/* selectbox */}
        {/* <SelectBar
            searchList={options} width="200px" height="100px"
      /> */}
          <ul>
            {
              snsIcons.map((icon, index)=>(
                <li key={index}>
                  <a href={icon.href}><img src={icon.src} alt={icon.alt}/></a>
                </li>
              ))
            }
          </ul>
        </InfoNetwork>
      </FooterBox>
    </FooterContainer>
  );
}

export default Footer;