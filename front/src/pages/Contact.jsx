import React from "react";
import povjerenikSlika from "../assets/povjerenik.jpg"; // Putanja do slike povjerenika
import zamjenikSlika from "../assets/zamjenik.jpg"; // Putanja do slike zamjenika
import "./contact.css"; // Stilovi komponente

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Kontakt informacije</h2>
        <p>
          <strong>Adresa:</strong> Obala Lazareta 1, Split
        </p>
        <p>
          <strong>Email:</strong> info@sindikatplovputa.hr
        </p>
        <p>
          <strong>Telefon:</strong> +385 1 123 4567
        </p>
      </div>

      <div className="commissioner-info">
        <h2>Povjerenik</h2>
        <img src={povjerenikSlika} alt="Povjerenik" className="contact-image" />
        <p>
          <strong>Ime:</strong> Ivan Juričević
        </p>
        <p>
          <strong>Funkcija:</strong> Povjerenik Sindikata
        </p>
        <p>
          <strong>Email:</strong> povjerenik@sindikatplovput.hr
        </p>
      </div>

      <div className="deputy-info">
        <h2>Zamjenik povjerenika</h2>
        <img
          src={zamjenikSlika}
          alt="Zamjenik povjerenika"
          className="contact-image"
        />
        <p>
          <strong>Ime:</strong> Marin Vukušić
        </p>
        <p>
          <strong>Funkcija:</strong> Zamjenik povjerenika Sindikata
        </p>
        <p>
          <strong>Email:</strong> zamjenik@sindikatplovput.hr
        </p>
      </div>
    </div>
  );
};

export default Contact;
