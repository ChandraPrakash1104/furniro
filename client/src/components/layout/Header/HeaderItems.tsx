import userIcon from '../../../assets/logos/userIcon.svg';
import cartIcon from '../../../assets/logos/cartIcon.svg';
import searchIcon from '../../../assets/logos/searchIcon.svg';
import wishlistIcon from '../../../assets/logos/wishlistIcon.svg';
import burgerIcon from '../../../assets/logos/burgerIcon.svg';
import { useState } from 'react';
import HeaderLinks from './HeaderLinks';
import Modal from '../../common/Modal/Modal';
import SearchBar from '../../common/SearchBar/SearchBar';
import { NavLink } from 'react-router-dom';

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
    <ul className='flex justify-around items-center cursor-pointer select-none md:justify-end md:space-x-4 lg:justify-center lg:space-x-8 xl:space-x-12 lg:col-span-2 xl:col-span-1'>
      <li className='active:bg-gray-200 px-1 py-1'>
        <div className='flex'>
          <img src={userIcon} alt='profile' className='w-5' />
          <NavLink to='/login'>
            <div className='text-sm hidden lg:block text-balance'>
              Login or signup
            </div>
          </NavLink>
        </div>
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
          <div className='w-[90%] md:w-[50%] lg:w-[30%] mx-auto my-4'>
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
          <div className='bg-white w-48 fixed top-0 right-0 pl-8 py-12 h-full lg:hidden'>
            <HeaderLinks onClick={handleMenuClick} />
          </div>
        </Modal>
      )}
    </ul>
  );
};

export default HeaderItems;
