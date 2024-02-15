import HeaderItems from './HeaderItems';
import HeaderLinks from './HeaderLinks';
import HeaderLogo from './HeaderLogo';

const Header = () => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-3 px-4 py-2 md:py-4 md:px-12'>
      <HeaderLogo />
      <div className='hidden lg:block'>
        <HeaderLinks />
      </div>
      <HeaderItems />
    </div>
  );
};

export default Header;
