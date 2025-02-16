import "./App.css";
import arrow from "../src/assets/pattern-divider-desktop.svg";
import arrowMobile from "../src/assets/pattern-divider-mobile.svg";
import dice from "../src/assets/icon-dice.svg";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [advice, setAdvice] = useState();
  const [id, setId] = useState();
  const handleAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.slip.advice);
        console.log(data.slip.id);
        setId(data.slip.id);
        setAdvice(data.slip.advice);
      });
  };
  useEffect(() => {
    handleAdvice();
  }, []);
  return (
    <>
      <main className="font-manrope bg-dark-blue h-screen flex justify-center items-center ">
        <div className="bg-Dark-Grayish-blue p-8 rounded-2xl text-center space-y-4 md:w-96 w-80 relative">
          <p className="text-Neon-Green font-semibold text-[10px] tracking-[4px] uppercase">
            Advice #<span>{id}</span>
          </p>
          <h1 className="text-light-cyan font-extrabold text-[28px]">
            <span>“</span>
            {advice}
            <span>”</span>
          </h1>
          <img src={arrow} alt="" className="md:flex hidden" />
          <img src={arrowMobile} alt="" className="md:hidden flex " />
          <button
            className="bg-Neon-Green p-4 rounded-4xl absolute  left-1/2 transform -translate-x-1/2 btn-shadow"
            onClick={() => handleAdvice()}
          >
            <img src={dice} alt="" />
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
