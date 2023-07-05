import Home_header from "./Home_header";
import Home_columns from "./Home_columns";
import Steps from "./Home_steps";
import AboutUs from "./Home_about_us";
import Cards from "./Home_cards";
import Contact from "./Home_contact";

const Home = () => {
  return (
    <>
      <Home_header />
      <Home_columns />
      <Steps />
      <AboutUs />
      <Cards />
      <Contact />
    </>
  );
};

export default Home;
