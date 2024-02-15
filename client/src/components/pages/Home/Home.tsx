import { redirect } from 'react-router-dom';
import Banner from './Banner/Banner';

const Home = () => {
  return (
    <main>
      <Banner />
    </main>
  );
};

export const loader = () => {
  return redirect('/home');
};
export default Home;
