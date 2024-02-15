import backDropImage from '../../../../assets/images/homeMainImage.png';
import BannerBox from './BannerBox';

const Banner = () => {
  return (
    <div>
      <div
        className='bg-no-repeat bg-cover bg-center w-full h-[95vh] md:h-[93vh] lg:h-[92vh] relative pt-20'
        style={{ backgroundImage: `url(${backDropImage})` }}
      >
        <BannerBox />
      </div>
    </div>
  );
};

export default Banner;
