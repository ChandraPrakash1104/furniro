const BrowseCard = ({ imgUrl, label }: { imgUrl: string; label: string }) => {
  return (
    <div className='space-y-2'>
      <img src={imgUrl} alt='#' className='rounded-xl w-81' />
      <div className='font-bold text-font-color1 text-lg text-center'>
        {label}
      </div>
    </div>
  );
};

export default BrowseCard;
