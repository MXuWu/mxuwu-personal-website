import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [text, updateText] = useState("");
  const [ind, updateInd] = useState(0);
  const [cursorClass, updateCursorClass] = useState("");
  const name = "Michael Wu\nProgrammer\nArtistic Savant";

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
    setTimeout(() => writeText(name), 100);
  });

  useEffect(() => {
    if (text === name) updateCursorClass("cursor-blink");
  }, [text]);
  return (
    <div className="App">
      <header className="App-header hero">
        <pre style={{ fontWeight: 600 }}>
          {text}
          <span className={`cursor ${cursorClass}`}></span>
        </pre>
      </header>
      <div className="info">
        <div className="info-panel">
          <div>Contact</div>
          <div>Mail Github LinkedIn</div>
        </div>
      </div>
    </div>
  );
}

export default App;
