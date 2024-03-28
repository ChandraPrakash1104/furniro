import BrowseCard from '../../../common/Cards/BrowseCard';
import LivingRoomImage from '/src/assets/images/BrowseRangeImages/livingimage.png';
import DiningRoomImage from '/src/assets/images/BrowseRangeImages/diningimage.png';
import BedRoomImage from '/src/assets/images/BrowseRangeImages/bedroomimage.png';
import Wrapper from '../../../common/UI/Wrapper';

const BrowseRangeProductCategory = () => {
  console.log(LivingRoomImage);
  return (
    <Wrapper>
      <BrowseCard imgUrl={DiningRoomImage} label='Dining' />
      <BrowseCard imgUrl={LivingRoomImage} label='Living' />
      <BrowseCard imgUrl={BedRoomImage} label='Bedroom' />
    </Wrapper>
  );
};

export default BrowseRangeProductCategory;
