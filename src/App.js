import "./App.css";
import { useEffect, useState } from "react";
import desktopDivider from "./images/pattern-divider-desktop.svg";
import ShuffleButton from "./components/ShuffleButton";

function App() {
  const [adviceNumber, setAdviceNumber] = useState();
  const [advice, setAdvice] = useState("Loading...");

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((res) => {
        console.log(res.slip);
        setAdvice(res.slip.advice);
        setAdviceNumber(res.slip.id);
      });
  }, []);

  return (
    <div className="App">
      <div className="container">
        <p className="subtext">Advice #{adviceNumber}</p>
        <h1 className="advice">{advice}</h1>
        <img className="divider" src={desktopDivider} alt="divider" />
        <ShuffleButton />
      </div>
    </div>
  );
}

export default App;
