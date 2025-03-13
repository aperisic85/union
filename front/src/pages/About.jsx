import React from "react";
import "./About.css"; // CSS za stilizaciju
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-page">
      {" "}
      {/* Dodajemo wrapper za cijelu stranicu */}
      <div className="about-container">
        {" "}
        {/* Stilski kontejner */}
        <h1>O nama</h1>
        <ReactMarkdown>
          Sindikat zaposlenika Plovput je organizacija koja predstavlja i brine
          o **pravima** i **interesima** svih zaposlenika u Plovputu. Naš cilj je
          **poboljšati** radne uvjete, **zaštititi** prava zaposlenika i **osigurati** bolju
          budućnost za sve članove.
        </ReactMarkdown>
        <ReactMarkdown>
          Kao Sindikat, aktivno radimo na promociji **socijalne pravde** ,
          transparentnosti i demokratskog upravljanja u našoj organizaciji.Naša
          **misija** je da omogućimo zaposlenicima da imaju glas i da budu aktivni
          uključeni u odluke koje utječu na njihove karijere i živote.
          </ReactMarkdown>
          <p>
          <Link to={"/contact"}>Naš tim</Link> se sastoji od predanih i iskusnih ljudi koji su posvećeni
          našoj zajednici.Radimo u skladu s načelima solidarnosti, poštenja i
          profesionalnosti, kako bismo osigurali da svi zaposlenici imaju
          sigurno i podržavajuće radno okruženje.
          </p>
        <p>
          Ako ste zainteresirani za pridruživanje našoj zajednici ili imate
          pitanja, molimo vas da nas{" "}
          <a href="mailto:info@sindikatplovputa.hr">kontaktirate</a>.Spremni
          smo vam pomoći i podržati vas u svim pitanjima vezanim za rad i
          Sindikat.
        </p>
      </div>
    </div>
  );
};

export default About;
