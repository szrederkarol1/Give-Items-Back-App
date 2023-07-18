import "../../scss/settings/SignUp/sign_up.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [password, setPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isValidRepeatPassword, setIsValidRepeatPassword] = useState(true);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setIsValidPassword(event.target.value.lenght >= 8);
  };
  const handleRepeatPasswordChange = (event) => {
    setRepeatPassword(event.target.value);
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
        // Akcja po poprawnej walidacji hasła
        setIsValidPassword(true);
        if (password === repeatPassword) {
          // Akcja po poprawnym potwierdzeniu hasła
          setIsValidRepeatPassword(true);
        } else {
          setIsValidRepeatPassword(false);
        }
      } else {
        // W przypadku niepoprawnego hasła
        setIsValidPassword(false);
      }
      // Kontynuuje przetwarzanie formularza lub wykonuje inne działania
    } else {
      // w przypadku niepoprawnego adresu e-mail
      setIsValidEmail(false);
      setIsValidPassword(false);
      setIsValidRepeatPassword(false);
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
      <div className="container_signup">
        <div className="content_signup">
          <div className="title_ornament">
            <p className="title">Załóż konto</p>
            <div className="ornament"></div>
          </div>
          <form className="signup_with_navigation" onSubmit={handleSubmit}>
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
              <form
                className="password"
                value={password}
                onChange={handlePasswordChange}
              >
                <label>Hasło</label>
                <br></br>
                <input type="password"></input>
                {!isValidPassword && (
                  <p style={{ color: "red", marginTop: "5px" }}>
                    Wpisz conajmniej 8 znaków
                  </p>
                )}
              </form>
              <form
                className="repeat_password"
                value={repeatPassword}
                onChange={handleRepeatPasswordChange}
              >
                <label>Powtórz hasło</label>
                <br></br>
                <input type="password"></input>
                {!isValidRepeatPassword && (
                  <p style={{ color: "red", marginTop: "5px" }}>
                    Niepoprawne potwierdzenie hasła
                  </p>
                )}
              </form>
            </div>
            <div className="signup_signin">
              <Link to="/logowanie" className="signup">
                Zaloguj się
              </Link>
              <button type="submit">Załóż konto</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
