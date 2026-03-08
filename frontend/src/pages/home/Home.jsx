import Banner from "./Banner";
import TopSellers from "./TopSellers";
import Recommended from "./Recommended";
import News from "./News";
import SwiperSection from "./swiper";

const Home = () => {
  return (
    <>
      <Banner />
      <TopSellers />
      <Recommended />
      <News />
      <SwiperSection />
    </>
  );
};

export default Home;