import React from "react";
import Weather from "./Weather";
import "./App.css";


export default function App() {
    return (
      <div className="App">
        <div className="Container">
          <Weather />
          <footer className="contact-info">
            <p>
              Open source code by
              <a href="https://github.com/MutableSpectre" target="_blank" rel="noreferrer"> Stephanie Ratliff-Putney</a> that is on
              <a href="https://github.com/MutableSpectre/My-Weather-Application-SRP" target="_blank" rel="noreferrer"> GitHub</a> and
              hosted on <a href="https://my-weather-application-srp.netlify.app/" target="_blank" rel="noreferrer">  Netlify.</a>
            </p>
          </footer>
    </div>
    </div>
    );
}