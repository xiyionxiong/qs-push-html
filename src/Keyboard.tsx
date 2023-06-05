import React, { useState } from "react";
import s from "./App.css";
type Props = {};

const Keyboard = (props: Props) => {
  const [inputNumber, setinputNumber] = useState([]);
  function addNumber(a) {
    if (a.target.innerText === ".") {
      if (!inputNumber.length) return;
      const decimalPointIndex = inputNumber.findIndex((item) => item == ".");
      if (decimalPointIndex !== -1) return;
    }
    inputNumber.push(a.target.innerText);
    setinputNumber([...inputNumber]);
  }
  function deleteNumber() {
    inputNumber.pop();
    setinputNumber([...inputNumber]);
  }

  return (
    <div>
      <div className={s.money}>
        <span className={s.sufix}>¥</span>
        <span className={s.amount}>{inputNumber}</span>
      </div>
      <div className={s.keyBoard}>
        <div onClick={addNumber}>1</div>
        <div onClick={addNumber}>2</div>
        <div onClick={addNumber}>3</div>
        <div onClick={deleteNumber}>{/* <TextDeletionOutline /> */}Del</div>
        <div onClick={addNumber}>4</div>
        <div onClick={addNumber}>5</div>
        <div onClick={addNumber}>6</div>
        <div className={s.confirm} onClick={() => console.log(inputNumber)}>
          确定
        </div>
        <div onClick={addNumber}>7</div>
        <div onClick={addNumber}>8</div>
        <div onClick={addNumber}>9</div>
        <div className={s.zero} onClick={addNumber}>
          0
        </div>
        <div onClick={addNumber}>.</div>
      </div>
    </div>
  );
};

export default Keyboard;
