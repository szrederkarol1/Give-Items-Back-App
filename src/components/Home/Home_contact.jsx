import "../../scss/settings/Home/home_contact.scss";
import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (name.trim() === '') {
      newErrors.name = 'Proszę wpisać swoje imię.';
    }

    if (email.trim() === '') {
      newErrors.email = 'Proszę wpisać swój email.';
    } else if (!isValidEmail(email)) {
      newErrors.email = 'Proszę wpisać poprawny adres email.';
    }

    if (message.trim() === '') {
      newErrors.message = 'Proszę wpisać swoją wiadomość.';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const isValidEmail = (email) => {
    // Prosta walidacja adresu email (możesz użyć bardziej zaawansowanej walidacji)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      // Wykonaj akcję, np. wysyłkę formularza
      console.log('Formularz jest poprawny');
      console.log('Imię:', name);
      console.log('Email:', email);
      console.log('Wiadomość:', message);

      // Resetuj pola formularza
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Imię:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div>
        <label htmlFor="message">Wiadomość:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {errors.message && <span className="error">{errors.message}</span>}
      </div>
      <button type="submit">Wyślij</button>
    </form>
  );
}

export default Contact;
