import "../../scss/settings/SignUp/sign_up.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import supabase from "../../services/services.js";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [password, setPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isValidRepeatPassword, setIsValidRepeatPassword] = useState(true);

  const navigation = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);
    setIsValidPassword(passwordValue.length >= 8);
  };
  const handleRepeatPasswordChange = (event) => {
    setRepeatPassword(event.target.value);
  };

  const validateEmail = (email) => {
    const emailCharacters = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailCharacters.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateEmail(email)) {
      // Akcja po poprawnej walidacji email
      setIsValidEmail(true);
      if (validatePassword(password)) {
        // Akcja po poprawnej walidacji hasła
        setIsValidPassword(true);
        if (password === repeatPassword) {
          // Akcja po poprawnym potwierdzeniu hasła
          setIsValidRepeatPassword(true);
        } else {
          // W przypadku niepoprawnego powtórzenia hasła
          setIsValidRepeatPassword(false);
        }
      } else {
        // W przypadku niepoprawnego hasła
        setIsValidPassword(false);
      }
      // Kontynuuje przetwarzanie formularza lub wykonuje inne działania

      try {
        if (isValidEmail && isValidPassword && isValidRepeatPassword) {
          let { error } = await supabase.auth.signUp({
            email: email,
            password: password,
          });

          if (!error) {
            navigation("/logowanie");
            return;
          }
          console.error(error);
        }
      } catch (error) {
        console.error("Wystąpił błąd podczas rejestracji:", error);
      }
    } else {
      // W przypadku niepoprawnego adresu e-mail
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
              <label>Email</label>
              <br />
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

              <label>Hasło</label>
              <br />
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
              ></input>
              {isValidPassword && (
                <p style={{ color: "red", marginTop: "5px" }}>
                  Wpisz co najmniej 8 znaków
                </p>
              )}

              <label>Powtórz hasło</label>
              <br />
              <input
                type="password"
                value={repeatPassword}
                onChange={handleRepeatPasswordChange}
              ></input>
              {!isValidRepeatPassword && (
                <p style={{ color: "red", marginTop: "5px" }}>
                  Niepoprawne potwierdzenie hasła
                </p>
              )}
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
