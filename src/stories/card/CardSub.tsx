import { Children, isValidElement, useCallback } from 'react';
import './card.css';

interface Props extends React.ComponentPropsWithRef<'div'> {
  children?: React.ReactNode;
}

export const CardTitle = ({ children }: Props) => {
  return <div className='card-title'>{children}</div>;
};

export const CardDate = ({ children }: Props) => {
  return <div className='card-date'>{children}</div>;
};

export const CardDivider = () => {
  return <div className='card-divider' />;
};

export const CardBody = ({ children }: Props) => {
  return <div className='card-body'>{children}</div>;
};

//** HEADER */
interface CardHeaderProps extends Props {
  imageURL?: string;
}

const FILTER = [(<CardTitle />).type, (<CardDate />).type];

export const CardHeader = ({ children, imageURL }: CardHeaderProps) => {
  const childrenArray = Children.toArray(children);

  const splitChildren = useCallback(() => {
    const selectedChildren: React.ReactNode[] = [];

    const filteredChildren = childrenArray.filter((child) => {
      if (isValidElement(child) && FILTER.includes(child.type)) {
        selectedChildren.push(child);
        return false;
      }
      return true;
    });

    return [filteredChildren, selectedChildren];
  }, [childrenArray]);

  const [filteredChildren, selectedChildren] = splitChildren();

  const gradientStyle = {
    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.00) 100%), url(${imageURL})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <>
      <div className='card-header' style={imageURL ? gradientStyle : undefined}>
        {filteredChildren}
        <div className='card-textframe'>{selectedChildren}</div>
      </div>
    </>
  );
};
