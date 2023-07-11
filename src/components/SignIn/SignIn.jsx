import "../../scss/settings/SignIn/sign_in.scss";
import { Link } from "react-router-dom";

const SignIn = () => {
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
      <div className="container_signin">
        <div className="content_signin">
          <div className="title_ornament">
            <p className="title">Zaloguj się</p>
            <div className="ornament"></div>
          </div>
          <div className="signin_with_navigation">
            <div className="grey_content">
              <div className="email">
                <label>Email</label>
                <br></br>
                <input type="text"></input>
              </div>
              <div className="password">
                <label>Hasło</label>
                <br></br>
                <input type="text"></input>
              </div>
            </div>
            <div className="signup_signin">
              <Link to="/rejestracja" className="signup">
                Załóż konto
              </Link>
              <button type="submit">Zaloguj się</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignIn;
