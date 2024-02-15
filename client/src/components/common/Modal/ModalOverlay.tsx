const ModalOverlay = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='fixed bg-white z-30'>
      <div>{children}</div>
    </div>
  );
};

export default ModalOverlay;
