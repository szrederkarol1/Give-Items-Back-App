import "../../scss/settings/Home/home_contact.scss";
import React, { useState } from "react";

const Contact = () => {
  return (
    <>
      <a name="Contact"></a>
      <div className="contact_container">
        <div className="container_right">
          <div className="container_title">
            <p className="title">Skontaktuj się z nami</p>
            <div className="ornament"></div>
          </div>
          <div className="form_container">
            <div className="top_form">
              <div className="form_name">
                <p style={{ marginBottom: "12px" }}>Wpisz swoje imię</p>
                <input type="text" placeholder="Krzysztof"></input>
              </div>
              <div className="form_email">
                <p style={{ marginBottom: "12px" }}>Wpisz swój email</p>
                <input type="text" placeholder="xyz123@me.com"></input>
              </div>
            </div>
            <div className="form_bottom">
              <p style={{ marginBottom: "12px" }}>Wpisz swoją wiadomość</p>
              <textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></textarea>
            </div>
            <button type="submit" className="send_message">
              Wyślij
            </button>
          </div>
        </div>
        <div className="copyright_icons">
          <div className="signature"></div>
          <div className="icons"></div>
        </div>
      </div>
    </>
  );
};

export default Contact;
