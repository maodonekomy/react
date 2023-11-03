/* eslint react-hooks/exhaustive-deps:off */
import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickToggle = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>ほげほげ</h1>
      <ColorfulMessage color="blue">みなさまおげんきですか…</ColorfulMessage>
      <ColorfulMessage color="pink">げんきでえっす！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <button onClick={onClickToggle}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(_o_)</p>}
    </>
  );
};

export default App;
