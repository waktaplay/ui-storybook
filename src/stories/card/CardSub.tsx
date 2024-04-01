import './card.css';

interface Props extends React.ComponentPropsWithRef<'div'> {
  children?: React.ReactNode;
}

export const CardHeader = ({ children }: Props) => {
  return <div className='card-header'>{children}</div>;
};

export const CardTitle = ({ children }: Props) => {
  return <div className='card-title'>{children}</div>;
};

export const CardDate = ({ children }: Props) => {
  return <div className='card-date'>{children}</div>;
};

export const CardTextFrame = ({ children }: Props) => {
  return <div className='card-textframe'>{children}</div>;
};
