const ProductCard = ({ product }: any) => {
  return (
    <div className='cursor-pointer bg-slate-200'>
      <div className='space-y-2'>
        <img src={product.image_url} alt='#' />
      </div>
      <div className='px-4 pb-4 space-y-1'>
        <div className='font-bold text-font-color1 text-lg  py-2'>
          {product.product_name}
        </div>
        <div className='text-sm text-font-color2 font-semibold'>
          {product.description}
        </div>
        <div className='font-semibold'>Rs. {product.price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
