const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='xl:w-3/4 mx-auto flex justify-center flex-col items-center space-y-4 xl:flex-row xl:space-y-0 xl:space-x-6'>
      {children}
    </div>
  );
};

export default Wrapper;
