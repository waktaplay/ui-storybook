import CardLink from './CardLink';
import CardMain from './CardMain';
import * as S from './CardSub';

const Card = Object.assign(CardMain, {
  Link: CardLink,
  Header: S.CardHeader,
  Title: S.CardTitle,
  Date: S.CardDate,
  TextFrame: S.CardTextFrame,
});

export default Card;
