import { NumericKeyboard } from "numeric-keyboard/dist/numeric_keyboard.react.js";
import useContext from "./App";
import "./App.css";
import Keyboard from "./Keyboard";

function App() {
  const { pushMsg, setAmount, amount } = useContext();

  return (
    <div className="layout">
      <div className="top">
        <img
          src="https://wisecloud3-oss-dev.oss-cn-beijing.aliyuncs.com/markdown/wisecloud_logo_u&d_s.png"
          className="logo"
          alt="Vite logo"
        />

        <h2 style={{ width: "60%", margin: "0 auto" }}>Payment live demo</h2>
      </div>

      <div style={{ textAlign: "left" }}>
        <label style={{ marginLeft: 32 }}>Amount: (Maximum: 999999.99)</label>
        <div />
        <div id="number-pad" placeholder="请输入数字" className="input">
          $ {amount}
        </div>
      </div>

      <div>
        {/* <Keyboard /> */}

        <NumericKeyboard
          entertext="Send"
          // layout='tel'
          onPress={(key: string) => {
            console.log("key>>", key);

            let am = amount;

            if (am === "0.00") am = "";

            if (key === "esc") {
              setAmount("0.00");
              return;
            }
            if (key === "del") {
              let r = `${am}`;
              r = r.slice(0, r.length - 1);

              if (am === "" || r === "") {
                setAmount("0.00");
                return;
              }

              setAmount(r);
              return;
            }

            if (key === ".") {
              if (am === "") {
                setAmount("0.");
                return;
              }

              if (am.includes(".")) return;
              setAmount(am + ".");
              return;
            }

            if (key === "enter") {
              pushMsg();
              return;
            }
            setAmount(am + key);
          }}
        />
      </div>
    </div>
  );
}

export default App;
