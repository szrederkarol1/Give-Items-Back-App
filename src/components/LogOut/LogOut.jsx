import "../../scss/settings/LogOut/_logOut.scss";
import { Link } from "react-router-dom";

const LogOut = () => {
  return (
    <>
      <div className="container_navigation">
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
            <Link to="/" className="start">
              Start
            </Link>
            <a href="/What_is" className="whatIs">
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
      </div>
      <div className="container_logOut">
        <div className="content_logOut">
          <p className="title_logOut">
            Wylogowano nastąpiło<br></br>pomyślnie!
          </p>
          <div className="ornament"></div>
          <Link to="/" className="button">
            Strona Główna
          </Link>
        </div>
      </div>
    </>
  );
};

export default LogOut;
