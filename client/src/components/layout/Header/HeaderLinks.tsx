import CloseButton from '../../common/Buttons/CloseButton';
import LinkItem from './LinkItem';

const HeaderLinks = ({ onClick }: { onClick?: () => void }) => {
  return (
    <>
      {onClick && <CloseButton onClick={onClick} />}
      <div className='flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:justify-center lg:space-x-3 '>
        <LinkItem destination='/home' label='Home' />
        <LinkItem destination='/shop' label='Shop' />
        <LinkItem destination='/about' label='About' />
        <LinkItem destination='/contact' label='Contact' />
      </div>
    </>
  );
};

export default HeaderLinks;
