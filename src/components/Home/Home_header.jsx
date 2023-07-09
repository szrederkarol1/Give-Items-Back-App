import "../../scss/settings/Home/home_header.scss";
import { Link } from "react-router-dom";

const Home_header = () => {
  return (
    <>
      <div className="header">
        <div className="header_image"></div>
        <div className="top_bar_and_announcement">
          <div className="top_bar">
            <div className="register">
              <Link to="/logowanie" className="SignIn">
                Zaloguj
              </Link>
              <Link to="/rejestracja" className="SignUp">
                Załóż konto
              </Link>
            </div>
            <div className="navigation">
              <a href="Start" className="start">
                Start
              </a>
              <a href="#What_is" className="whatIs">
                O co chodzi?
              </a>
              <a href="#About_us" className="aboutUs">
                O nas
              </a>
              <a href="#Fundation" className="fundation">
                Fundacja i organizacje
              </a>
              <a href="#Contact" className="contact">
                Kontakt
              </a>
            </div>
          </div>
          <div className="announcement">
            <p className="announcement_tittle">
              Zacznij pomagać <br></br>
              Oddaj niechciane rzeczy w zaufane ręce
            </p>
            <div className="ornament"></div>
            <div className="interactions">
              <Link to="/logowanie" className="give_back">
                <p className="give_back_paragraph">
                  ODDAJ<br></br>RZECZY
                </p>
              </Link>
              <Link to="/logowanie" className="arrange">
                <p className="arrange_paragraph">
                  ZORGANIZUJ<br></br>ZBIÓRKĘ
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home_header;
