import jump from '../assets/jump.svg';
import link from '../assets/link.svg';
import youtube from '../assets/youtube.svg';
import './card.css';

const PREFIX = 'card-link--';

const LinkIcons = {
  youtube,
  naver_cafe: link,
} satisfies Record<string, string>;

type LinkType = keyof typeof LinkIcons;

interface CardLink {
  type?: LinkType;
  isLive?: boolean;
  children?: string;
}

const CardLink = ({ type, isLive, children }: CardLink) => {
  const iconSrc = type ? LinkIcons[type] : '';

  return (
    <button className='card-link'>
      <img src={iconSrc} alt='' />
      <div className={isLive ? `${PREFIX}on` : `${PREFIX}off`}>{isLive ? 'ON AIR' : 'OFF AIR'}</div>
      <p>{children}</p>
      <img src={jump} alt='' />
    </button>
  );
};

export default CardLink;
