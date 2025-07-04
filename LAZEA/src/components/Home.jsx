import { useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import ProductSection from './ProductSection';
import SportsCategories from './PlantCategories ';
//import Testimonials from './Testimonials';
import UpcomingEvents from './UpcomingEvents';
import CommonMistakes from './CommonMistakes';
import BeginnerPlants from './BeginnerPlants';
import Promotions from './Promotions';
import BlogSection from './BlogSection';
import Newsletter from './Newsletter';

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
      <Promotions/>
      <BlogSection/>
      <Newsletter />
      {/* <Testimonials /> */}
    </div>
  );
};

export default Home;