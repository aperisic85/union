import React from "react";
import "./Join.css";

const Join = () => {
  return (
    <div className="join-page-container">
      {" "}
      {/* Promijenjena klasa */}
      <div className="join-content">
        <h1>Učlani se u Sindikat</h1>
        <p className="join-description">
          Postanite dio našeg sindikata i osigurajte svoja prava na radnom
          mjestu. Kliknite na link ispod kako biste preuzeli pristupnicu i
          pridružili se našoj zajednici.
        </p>
        <a href="/docs/pristupnica.docx" download className="join-link">
          Preuzmi pristupnicu
        </a>
        <p className="mail-instruction">
          Pošalji popunjenu pristupnicu na mail:{" "}
          <a href="mailto:info@sindikatplovputa.hr" className="mail-link">
            info@sindikatplovputa.hr
          </a>
        </p>
      </div>
    </div>
  );
};

export default Join;
