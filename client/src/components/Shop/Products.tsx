import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../common/Cards/ProductCard';
import Wrapper from '../common/UI/Wrapper';
import { useRecoilState } from 'recoil';
import { loadingState } from '../../store/loading';
import Loader from '../common/Loader/Loader';
import AddToCartButton from '../common/Buttons/AddToCartButton';
import { BACKEND_URL } from '../../utils/api';
import { Product } from '../../typings/productTypes';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useRecoilState(loadingState);

  const category = searchParams.get('category');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        let URL = `${BACKEND_URL}/product`;
        setLoading(true);
        if (category) {
          URL = URL + `/${encodeURIComponent(category)}`;
        } else {
          URL = URL + '/bulk';
        }
        const response = await axios.get(URL);
        const data = response.data;
        setLoading(false);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, []);

  return (
    <Wrapper>
      {loading && <Loader />}
      <div className='my-10 grid grid-cols-1 md:grid-cols-2 md:gap-2 lg:gap-4 lg:grid-cols-3 2xl:gap-8 2xl:grid-cols-4 space-y-6 md:space-y-0'>
        {products &&
          products.map((product) => (
            <div className='flex justify-center items-center' key={product.id}>
              <div className='w-64 relative group/item'>
                <div className='absolute inset-0 flex items-center justify-center invisible group-hover/item:visible'>
                  <AddToCartButton productId={product.id} />
                  <div className='bg-black opacity-20 duration-200 absolute w-full h-full' />
                </div>
                <div>
                  <ProductCard product={product} />
                </div>
              </div>
            </div>
          ))}
      </div>
    </Wrapper>
  );
};

export default Products;