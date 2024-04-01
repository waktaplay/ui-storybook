interface CardMainProps {
  children?: React.ReactNode;
}

const CardMain = ({ children }: CardMainProps) => {
  return (
    <>
      <div className='card-border' />
      <div className='card-main'>{children}</div>
    </>
  );
};

export default CardMain;
