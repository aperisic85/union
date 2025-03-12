import React from 'react';
import './about.css'; // Uvozite about.css

const About = () => {
  return (
    <div className="page-content container about-content">
      <h1>O nama</h1>
      <p>
        Sindikat zaposlenika Plovput je organizacija koja predstavlja i brine o pravima i interesima svih zaposlenika u Plovputu. Naš cilj je poboljšati radne uvjete, zaštititi prava zaposlenika i osigurati bolju budućnost za sve članove.
      </p>
      <p>
        Kao Sindikat, aktivno radimo na promociji socijalne pravde, transparentnosti i demokratskog upravljanja u našoj organizaciji. Naša misija je da omogućimo zaposlenicima da imaju glas i da budu aktivni uključeni u odluke koje utječu na njihove karijere i živote.
      </p>
      <p>
        Naš tim se sastoji od predanih i iskusnih ljudi koji su posvećeni našoj zajednici. Radimo u skladu s načelima solidarnosti, poštenja i profesionalnosti, kako bismo osigurali da svi zaposlenici imaju sigurno i podržavajuće radno okruženje.
      </p>
      <p>
        Ako ste zainteresirani za pridruživanje našoj zajednici ili imate pitanja, molimo vas da nas <a href="mailto:kontakt@plovputsindikat.hr">kontaktirate</a>. Spremni smo vam pomoći i podržati vas u svim pitanjima vezanim za rad i Sindikat.
      </p>
    </div>
  );
};

export default About;
