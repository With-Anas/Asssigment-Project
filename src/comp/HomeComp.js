import React from "react";
import "./CSS/HomeComp.css";

function HomeComp() {
  return (
    <>
      <div className="containerHC" id="HM">
        <div className="navi pad">
          <nav className="navbar navbar-expand-lg nav-link">
            <a className="navbar-brand" href="http://localhost:3000/">
              <b>With Anas</b>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="ms-auto">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link na" aria-current="page" href="#HM">
                    <b>Home</b>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link na" href="#P1">
                    <b>Page 01</b>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link na" href="#P2">
                    <b>Page 02</b>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link na" href="#P3">
                    <b>Page 03</b>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link na" href="#P4">
                    <b>Page 04</b>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link na" href="#P5">
                    <b>Page 05</b>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link na" href="#P6">
                    <b>Page 06</b>
                  </a>
                </li>
              </ul>
            </div>
            </div>
          </nav>
        </div>
        <div className="bgimg">
          <div className="content">
            <p>Web Design / Web Development / Social Media</p>
            <h3>Digital Marketing</h3> <p>_____________________________</p>
            <div className="but">
              <button className="butt" onClick={()=>alert("hello")}>What we do</button>
              <button className="butt">Talk to us</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeComp;
