import './footer.css';

import discord from './assets/discord.svg';

interface FooterProps {
  connectDiscord: string;
  onClickTerm: () => void;
  onClickUserInfo: () => void;
}

export const Footer = ({
  connectDiscord = '#',
  onClickTerm,
  onClickUserInfo,
}: FooterProps) => {
  return (
    <footer>
      <div className="storybook-footer">
        <div className="info">
          <p className="appName">SPACEWAK</p>
          <p>Copryright ⓒ 2023 spacewak. All rights reserved.</p>
        </div>

        <div className="contact">
          <p className="divTitle">Contact</p>

          <div className="contactWrap">
            <a href={connectDiscord} className="discordIcon" target="_blank">
              <img src={discord} alt="discord_icon" /> 문의하기
            </a>
          </div>
        </div>
        <div className="terms">
          <p onClick={onClickTerm}>이용약관</p>
          <p onClick={onClickUserInfo}>개인정보처리방침</p>
        </div>
      </div>
    </footer>
  );
};
