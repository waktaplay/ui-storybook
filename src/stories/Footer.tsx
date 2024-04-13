import './footer.css';

interface FooterProps {
  onClickContact: () => void;
  onClickTerm: () => void;
  onClickUserInfo: () => void;
}

export const Footer = ({
  onClickContact,
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
            <p onClick={onClickContact}>문의하기</p>
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
