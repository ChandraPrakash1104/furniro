import userIcon from '../../../assets/logos/userIcon.svg';
import cartIcon from '../../../assets/logos/cartIcon.svg';
import searchIcon from '../../../assets/logos/searchIcon.svg';
import wishlistIcon from '../../../assets/logos/wishlistIcon.svg';
import burgerIcon from '../../../assets/logos/burgerIcon.svg';
import { useState } from 'react';
import HeaderLinks from './HeaderLinks';
import Modal from '../../common/Modal/Modal';
import SearchBar from '../../common/SearchBar/SearchBar';

const HeaderItems = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSeachClick = () => {
    setIsSearchOpen(!isSearchOpen);
    console.log('clicked');
  };

  return (
    <ul className='flex justify-around items-center cursor-pointer select-none md:justify-end md:space-x-4 lg:justify-center lg:space-x-8 xl:space-x-12'>
      <li className='active:bg-gray-200 px-1 py-1  '>
        <img src={userIcon} alt='profile' className='w-5' />
      </li>
      {!isSearchOpen && (
        <li
          className='active:bg-gray-200 px-1 py-1  '
          onClick={handleSeachClick}
        >
          <img src={searchIcon} alt='Search' className='w-5' />
        </li>
      )}
      {isSearchOpen && (
        <Modal onClick={handleSeachClick}>
          <div className='w-[90vw] fixed left-5 top-5 bg-white '>
            <SearchBar onChange={() => {}} placeholder='Search' />
          </div>
        </Modal>
      )}
      <li className='active:bg-gray-200 px-1 py-1  '>
        <img src={wishlistIcon} alt='wishlist' className='w-5' />
      </li>
      <li className='active:bg-gray-200 px-1 py-1  '>
        <img src={cartIcon} alt='cart' className='w-5' />
      </li>
      <li
        onClick={handleMenuClick}
        className='lg:hidden active:bg-gray-200 px-1 py-1  '
      >
        <img src={burgerIcon} alt='menu' className='w-5' />
      </li>

      {isMenuOpen && (
        <Modal onClick={handleMenuClick}>
          <div className='bg-white w-44 fixed top-0 right-0 pl-8 py-8 lg:hidden'>
            <HeaderLinks onClick={handleMenuClick} />
          </div>
        </Modal>
      )}
      {/* </div> */}
    </ul>
  );
};

export default HeaderItems;
