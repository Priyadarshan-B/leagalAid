import React from "react";
import "./officeBearers.css";

const officeBearersData = [
  {
    batch: "2007-2008",
    president: "Mr. G. Arun Kumar",
    vicePresident: "Ms. Rohini Ravikumar",
    secretary: "Ms. Revathy Muralidharan",
  },
  {
    batch: "2008-2009",
    president: "Ms. Rohini Ravikumar",
    vicePresident: "Ms. Aarthy Madangopal",
    secretary: "Mr. Alagu Narayan",
  },
];

function OfficeBearers() {
  return (
    <div className="office-bearers-container">
      <h1>Previous Office Bearers</h1>
      <table className="office-bearers-table">
        <thead>
          <tr>
            <th>Batch</th>
            <th>President</th>
            <th>Vice President</th>
            <th>Secretary</th>
          </tr>
        </thead>
        <tbody>
          {officeBearersData.map((bearer, index) => (
            <tr key={index}>
              <td>{bearer.batch}</td>
              <td>{bearer.president}</td>
              <td>{bearer.vicePresident}</td>
              <td>{bearer.secretary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OfficeBearers;
