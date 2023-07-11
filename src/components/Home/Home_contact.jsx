import "../../scss/settings/Home/home_contact.scss";
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (name.trim() === "") {
      newErrors.name = "Proszę wpisać swoje imię.";
    }

    if (email.trim() === "") {
      newErrors.email = "Proszę wpisać swój email.";
    } else if (!isValidEmail(email)) {
      newErrors.email = "Proszę wpisać poprawny adres email.";
    }

    if (message.trim() === "") {
      newErrors.message = "Proszę wpisać swoją wiadomość.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const isValidEmail = (email) => {
    // Prosta walidacja adresu email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      // Wykonuje akcję, np. wysyłkę formularza
      console.log("Formularz jest poprawny");
      console.log("Imię:", name);
      console.log("Email:", email);
      console.log("Wiadomość:", message);

      // Resetuj pola formularza
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
    }
  };

  return (
    <>
      <div className="container_contact">
        <div className="title_email">
          <p className="title_contact">Skontaktuj się z nami</p>
          <div className="ornament"></div>
        </div>
        <form onSubmit={handleSubmit} className="container_form">
          <div className="name_email">
            <div className="name">
              <label htmlFor="name">Wpisz swoje imię</label>
              <br></br>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Krzysztof"
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="email">
              <label htmlFor="email">Wpisz swój email</label>
              <br></br>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="abc@xyz.pl"
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
          </div>
          <div className="message">
            <label htmlFor="message">Wpisz swoją wiadomość</label>
            <br></br>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
            {errors.message && <span className="error">{errors.message}</span>}
          </div>
          <button type="submit">Wyślij</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
