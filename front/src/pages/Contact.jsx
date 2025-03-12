import React from "react";
import povjerenikSlika from "../assets/povjerenik.jpg";
import zamjenikSlika from "../assets/zamjenik.jpg";
import "./Contact.css";

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
        <img src={povjerenikSlika} alt="Povjerenik" className="contact-image" />
        <div className="info-container">
          <h2>Povjerenik</h2>
          <p>
            <strong>Ime:</strong> Ivan Juričević
          </p>
          <p>
            <strong>Funkcija:</strong> Povjerenik Sindikata
          </p>
          <p>
            <strong>Email:</strong> povjerenik@sindikatplovputa.hr
          </p>
          <p>
            <strong>Mobitel/WhatsApp:</strong>
            <a
              href="https://wa.me/385911234567"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              +385 91 123 4567
              <i className="fab fa-whatsapp whatsapp-icon"></i>
            </a>
          </p>
        </div>
      </div>

      <div className="deputy-info">
        <img
          src={zamjenikSlika}
          alt="Zamjenik povjerenika"
          className="contact-image"
        />
        <div className="info-container">
          <h2>Zamjenik povjerenika</h2>
          <p>
            <strong>Ime:</strong> Marin Vukušić
          </p>
          <p>
            <strong>Funkcija:</strong> Zamjenik povjerenika Sindikata
          </p>
          <p>
            <strong>Email:</strong> zamjenik@sindikatplovputa.hr
          </p>
          <p>
            <strong>Mobitel/WhatsApp:</strong>
            <a
              href="https://wa.me/385911234567"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              +385 91 123 4567
              <i className="fab fa-whatsapp whatsapp-icon"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
