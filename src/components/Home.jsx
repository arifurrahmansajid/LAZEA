import { useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import ProductSection from './ProductSection';
import SportsCategories from './SportsCategories';
import Testimonials from './Testimonials';
import UpcomingEvents from './UpcomingEvents';

const Home = () => {
  const products = useLoaderData();
  console.log(products)

  return (
    <div>
      <Banner />
      <SportsCategories />
      <ProductSection products={products} />
      <Testimonials />
      <UpcomingEvents />
    </div>
  );
};

export default Home;