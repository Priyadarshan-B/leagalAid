import React from "react";
import Header from "../Header/header";
import Footer from "../footer/footer";
import './appLayout.css'

function AppLayout(props) {
  return (
    <div className="layout">
      <Header />
      <div className={"app-body"} style={{ }}>
        {props.body}  
      </div>
      <Footer/>
    </div>
  );
}

export default AppLayout;
