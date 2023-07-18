import { useState } from "react";
import "../../scss/settings/SignIn/sign_in.scss";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setIsValidPassword(event.target.value >= 8);
  };

  const validateEmail = (email) => {
    const emailCharacters = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailCharacters.test(email);
  };

  const validatePassword = (password) => {
    return setIsValidPassword(password);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateEmail(email)) {
      // Akcja po poprawnej walidacji
      setIsValidEmail(true);
      if (validatePassword(password)) {
        // Akcja po poprawnej walidacji
        setIsValidPassword(true);
      } else {
        // W przypadku niepoprawnego hasła
        setIsValidPassword(false);
      }
      // Kontynuuje przetwarzanie formularza lub wykonuje inne działania
    } else {
      // w przypadku niepoprawnego adresu e-mail
      setIsValidEmail(false);
      setIsValidPassword(false);
    }
  };

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
          <form className="signin_with_navigation" onSubmit={handleSubmit}>
            <div className="grey_content">
              <form className="email">
                <label>Email</label>
                <br></br>
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                ></input>
                {!isValidEmail && (
                  <p style={{ color: "red", marginTop: "5px" }}>
                    Proszę wpisać poprawny email
                  </p>
                )}
              </form>
              <form className="password">
                <label>Hasło</label>
                <br></br>
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                ></input>
                {!isValidPassword && (
                  <p style={{ color: "red", marginTop: "5px" }}>
                    Wpisz conajmniej 8 znaków
                  </p>
                )}
              </form>
            </div>
            <div className="signup_signin">
              <Link to="/rejestracja" className="signup">
                Załóż konto
              </Link>
              <button type="submit">Zaloguj się</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default SignIn;
