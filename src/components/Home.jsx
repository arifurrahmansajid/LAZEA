import { useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import ProductSection from './ProductSection';
import SportsCategories from './PlantCategories ';
//import Testimonials from './Testimonials';
import UpcomingEvents from './UpcomingEvents';
import CommonMistakes from './CommonMistakes';
import BeginnerPlants from './BeginnerPlants';

const Home = () => {
  const products = useLoaderData();
  console.log(products)

  return (
    <div>
      <Banner />
      <SportsCategories />
      <ProductSection products={products} />
      <BeginnerPlants/>
      <UpcomingEvents />
      <CommonMistakes/>
    </div>
  );
};

export default Home;