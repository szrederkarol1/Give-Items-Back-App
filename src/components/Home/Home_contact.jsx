import "../../scss/settings/Home/home_contact.scss";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (formData.name.trim() === "") {
      newErrors.name = "Podane imię jest nieprawidłowe!";
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Proszę wpisać swój email!";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Podany email jest nieprawidłowy!";
    }

    if (formData.message.trim() === "") {
      newErrors.message = "Proszę wpisać swoją wiadomość.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const isValidEmail = (email) => {
    // Walidacja adresu email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(
        "https://formspree.io/f/myyqzjvd",
        {
          method: "POST",
          body: data,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        alert("Wiadomość została wysłana. Dziękujemy!");
        form.reset();
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert(
          "Wystąpił problem podczas wysyłania wiadomości. Spróbuj ponownie później."
        );
      }
    } catch (error) {
      console.error("Wystąpił błąd podczas wysyłania wiadomości:", error);
    }

    const isValid = validateForm();

    if (isValid) {
      // Wysyłka formularza
      console.log("Formularz jest poprawny");
      console.log("Imię:", formData.name);
      console.log("Email:", formData.email);
      console.log("Wiadomość:", formData.message);

      // Reset pól formularza
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setErrors({});

      setShowSuccess(true);
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
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Krzysztof"
                required
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="email">
              <label htmlFor="email">Wpisz swój email</label>
              <br></br>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="abc@xyz.pl"
                required
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
          </div>
          <div className="message">
            <label htmlFor="message">Wpisz swoją wiadomość</label>
            <br></br>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              required
            />
            {errors.message && <span className="error">{errors.message}</span>}
          </div>
          <button type="submit">Wyślij</button>
          <div>
            {showSuccess && (
              <div
                style={{
                  color: "green",
                  margin: "5px 0 5px 0",
                  fontSize: "26px",
                  textAlign: "center",
                }}
              >
                Wiadomość została wysłana!<br></br>
                Wkrótce się skontaktujemy!
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
