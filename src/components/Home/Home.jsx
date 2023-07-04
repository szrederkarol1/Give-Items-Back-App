import Home_header from "./Home_header";
import Home_columns from "./Home_columns";
import Steps from "./Home_steps";
import AboutUs from "./About_us";
import Cards from "./Home_cards";

const Home = () => {
  return (
    <>
      <Home_header />
      <Home_columns />
      <Steps />
      <AboutUs />
      <Cards />
    </>
  );
};

export default Home;
