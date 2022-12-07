import React, { useEffect, useRef, useState } from "react";

function ClickMap() {
  const [highlighted, setHighLighted] = useState(false);
  const [inputFieldIds, setInputFieldIds] = useState({});
  const inputOneRef = useRef();
  const inputTwoRef = useRef();
  const inputThreeRef = useRef();

  const hightLightInputField = (e) => {
    const buttonId = e.target.id;
    setInputFieldIds(
      inputOneRef.current.id,
      inputTwoRef.current.id,
      inputThreeRef.current.id
    );
    console.log(inputFieldIds);
  };

  return (
    <>
      <h1>Click Map</h1>
      <div className="container">
        <div className="source">
          <button id="one" onClick={hightLightInputField}>
            ONE
          </button>
          <button id="two" onClick={hightLightInputField}>
            TWO
          </button>
          <button id="three" onClick={hightLightInputField}>
            THREE
          </button>
        </div>
        <div className="path">
          <form>
            <input
              ref={inputOneRef}
              className={highlighted && `highlighted`}
              id="inputFieldone"
              type="text"
              placeholder="One"
            />
            <input
              ref={inputTwoRef}
              className={highlighted && `highlighted`}
              id="inputFieldtwo"
              type="text"
              placeholder="Two"
            />
            <input
              ref={inputThreeRef}
              className={highlighted && `highlighted`}
              id="inputFieldthree"
              type="text"
              placeholder="Three"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default ClickMap;
