import "../../scss/settings/home.scss";
import { useNavigate, Link } from "react-router-dom";

const Home_header = () => {
  return (
    <>
        <div className="header">
          <div className="header_image">
            <img
              className="home_image"
              src="../../assets/Home-Hero_Image"
            ></img>
          </div>
          <div className="top_bar_and_announcement">
            <div className="top_bar">
              <div className="register">
                <Link to="/logowanie" className="SignIn">Zaloguj</Link>
                <Link to="/rejestracja" className="SignUp">Załóż konto</Link>
              </div>
              <div className="navigation">
                <a href="Start">Start</a>
                <a href="What_is">O co chodzi?</a>
                <a href="About us">O nas</a>
                <a href="foundation">Fundacja i organizacje</a>
                <a href="Contact">Kontakt</a>
              </div>
            </div>
            <div className="announcement">
              <p className="announcement_tittle">
                Zacznij pomagać <br></br>
                Oddaj niechciane rzeczy w zaufane ręce
              </p>
              <div className="ornament"></div>
              <div className="interactions">
                <div className="give_back">ODDAJ RZECZY</div>
                <div className="arrange">ZORGANIZUJ ZBIÓRKĘ</div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Home_header;
