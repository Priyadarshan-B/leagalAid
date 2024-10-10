import React from "react";
import h1 from "../../assets/h1.jpg";
import "./home.css";

function Home() {
  return <Body />;
}

function Body() {
  return (
    <div>
      <div className="image"><img src={h1} alt="bg" height="700px" width="100%" /></div>
      <h1>
        <center>About Us</center>
      </h1>
      <div className="content">
          <p className="content-1">
            The Moot Court Association (MCA) at the School of Excellence in Law,
            Chennai, was instituted in 2008 with the express purpose of cultivating
            exceptional oral advocacy skills and sophisticated legal writing
            techniques among students. Our principal mission is to foster and
            advance the practice of mooting. The MCA meticulously oversees student
            participation in an array of Moot Court and Allied Competitions at the
            International, National, and State levels.
          </p>
          <p className="content-1">
            Our flagship event, the Pro Bono Enviro National Moot Court Competition,
            has been held annually since 2007. This pioneering competition was the
            first in India to spotlight environmental issues, thereby addressing a
            crucial and contemporary field of law.
          </p>
          <p className="content-1">
            Since 2022, we have also introduced the National Level Tamil Moot Court
            Competition, where proceedings are conducted entirely in Tamil. This
            initiative aims to promote and celebrate the use of our mother tongue in
            legal discourse, reinforcing the importance of linguistic and cultural
            heritage in the practice of law.
          </p>
          <p className="content-1">
            Additionally, we proudly organize the K.R. Ramamani Memorial Taxation
            Moot Court Competition in partnership with S.A.P.R. Advocates, Chennai.
            This competition is meticulously designed to offer an elite platform
            focused on the intricacies of taxation law. Both of these esteemed moot
            court competitions have garnered significant acclaim, with a consistent
            increase in the number of participants each year, reflecting their
            growing prestige and relevance.
          </p>
          <p className="content-1">
            To further nurture the mooting spirit within our university, we also
            conduct Intra-University Moot Court Competitions and Alternative Dispute
            Resolution (ADR) sessions. These initiatives aim to foster a robust
            mooting culture and provide students with ample opportunities to refine
            their advocacy skills in a supportive environment.
          </p>
          <p className="content-1">
            We firmly believe that mooting is an indispensable facet of legal
            education, essential for the comprehensive development of every law
            student. Through our endeavors, we strive to equip aspiring legal
            professionals with the skills necessary to excel in their future
            careers.
          </p>
      </div>
    </div>
  );
}
export default Home;
