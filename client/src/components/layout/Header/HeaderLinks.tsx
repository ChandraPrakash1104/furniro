import CloseButton from '../../common/Buttons/CloseButton';
import LinkItem from './LinkItem';

const HeaderLinks = ({ onClick }: { onClick?: () => void }) => {
  return (
    <>
      {onClick && <CloseButton onClick={onClick} />}
      <div className='flex flex-col space-y-6 lg:flex-row lg:space-y-0 lg:justify-center lg:space-x-3 '>
        <LinkItem destination='/home' label='Home' />
        <LinkItem destination='/shop' label='Shop' />
        <LinkItem destination='/about' label='About' />
        <LinkItem destination='/contact' label='Contact' />
        <div className='flex flex-col space-y-6 absolute bottom-20 lg:hidden'>
          <LinkItem destination='/login' label='Login' />
          <LinkItem destination='/signup' label='Signup' />
        </div>
      </div>
    </>
  );
};

export default HeaderLinks;
