import CardLink from './CardLink';
import CardMain from './CardMain';
import * as S from './CardSub';

const Card = Object.assign(CardMain, {
  Link: CardLink,
  Header: S.CardHeader,
  Title: S.CardTitle,
  Date: S.CardDate,
  Divider: S.CardDivider,
  Body: S.CardBody,
});

export default Card;
