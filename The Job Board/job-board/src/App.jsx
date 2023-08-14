import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <header id="header">
          <p> The Job Board</p>
        </header>
      </div>
      <div className="container-wrapper">
        <div className="container">
          <div className="item">
            <h1> Full Time Sales Associate - Sydney Boutique</h1>
            <p> CDI - Australie - Sydney </p>
          </div>
          <div className="item">
            <h1> Full Time Sales Associate - Sydney Boutique</h1>
            <p> CDI - Australie - Sydney </p>
          </div>
          <div className="item">
            <h1> Full Time Sales Associate - Sydney Boutique</h1>
            <p> CDI - Australie - Sydney </p>
          </div>
          <div className="item">
            <h1> Full Time Sales Associate - Sydney Boutique</h1>
            <p> CDI - Australie - Sydney </p>
          </div>
          <div className="item">
            <h1> Full Time Sales Associate - Sydney Boutique</h1>
            <p> CDI - Australie - Sydney </p>
          </div>
          <div className="item">
            <h1> Full Time Sales Associate - Sydney Boutique</h1>
            <p> CDI - Australie - Sydney </p>
          </div>
          <div className="item">
            <h1> Full Time Sales Associate - Sydney Boutique</h1>
            <p> CDI - Australie - Sydney </p>
          </div>
          <div className="item">
            <h1> Full Time Sales Associate - Sydney Boutique</h1>
            <p> CDI - Australie - Sydney </p>
          </div>
          <div className="item">
            <h1> Full Time Sales Associate - Sydney Boutique</h1>
            <p> CDI - Australie - Sydney </p>
          </div>
        </div>
      </div>
      <footer id="footer">
        <p> Made with React at Le Reacteur By Lucas Bolivard</p>
      </footer>
    </>
  );
}

export default App;
