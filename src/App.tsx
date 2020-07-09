import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./App.css";

function App() {
  const [text, updateText] = useState("");
  const [ind, updateInd] = useState(0);
  const [cursorClass, updateCursorClass] = useState("");
  const name =
    "Sydney\nProgrammer\nArtistic Savant\nFrontend Software Developer";
  const socialsColour = "#ddd";
  function writeText(fullStr: string) {
    updateText((text) => {
      if (ind < fullStr.length) {
        updateInd(ind + 1);
        return text + fullStr[ind];
      }
      return text;
    });
  }

  useEffect(() => {
    console.log("effect", ind);
    setTimeout(() => writeText(name), 75);
  });

  useEffect(() => {
    if (text === name) updateCursorClass("cursor-blink");
  }, [text]);

  return (
    <div className="App flex">
      <header className="App-header hero flex">
        <div className="title flex column">
          <div className="header-container">
            <div className="fade-in sub-header">hello! this is</div>
            <h2 className="header" style={{ fontWeight: 500 }}>
              Michael Xu Wu
            </h2>
          </div>
        </div>
        <div className="socials" style={{ justifySelf: "flex-end" }}>
          <a href={`mailto:xu.michael.wu@gmail.com`}>
            <FontAwesomeIcon
              className="icon"
              icon={faEnvelope}
              color={socialsColour}
              size="2x"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/xu-michael-wu/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              className="icon"
              icon={faLinkedin}
              color={socialsColour}
              size="2x"
            />
          </a>
          <a
            href="https://github.com/MXuWu"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              className="icon"
              icon={faGithub}
              color={socialsColour}
              size="2x"
            />
          </a>
        </div>
      </header>
      <div className="info flex column">
        <div style={{ alignSelf: "flex-start" }}>
          <pre>
            {text}
            <span className={`cursor ${cursorClass}`}></span>
          </pre>
        </div>
        <button className="button">
          <pre>About</pre>
        </button>
      </div>
    </div>
  );
}

export default App;
