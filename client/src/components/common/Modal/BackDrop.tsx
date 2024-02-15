const BackDrop = ({ onClick }: { onClick: () => void }) => {
  return (
    <div
      onClick={onClick}
      className='fixed w-screen h-screen z-20 bg-black bg-opacity-25'
    />
  );
};

export default BackDrop;
