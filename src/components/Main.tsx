import { useEffect, useState } from "react";
import useContext from "../GlobalState";
import Keyboard from "./Keyboard";
import { ContentWrapper, MainWrapper, TopWrapper } from "./Main.style";
// @ts-ignore
import * as screen from "../request/screen";
import Modal from "./modal";

type Props = {};

const MainLayout = ({}: Props) => {
  const { pushMsg, setAmount, amount, generate, orderNo } = useContext();

  useEffect(() => {
    generate();
  }, []);

  const [visible, setVisible] = useState(false);

  return (
    <MainWrapper id="app-pay">
      <TopWrapper>
        <div className="left">
          <div className="title">
            Pay to Wiseasy{" "}
            <svg
              onClick={() => setVisible(true)}
              style={{ marginLeft: 12 }}
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="21406"
              width="16"
              height="16"
            >
              <path
                d="M923.905 338.957c-23.457-54.238-55.37-101.537-95.759-141.871-40.373-40.346-87.577-72.236-141.593-95.676-54.022-23.446-111.859-35.166-173.511-35.166-61.657 0-119.496 11.721-173.516 35.166-54.016 23.44-101.208 55.329-141.593 95.676-40.385 40.335-72.297 87.627-95.766 141.871-23.463 54.245-35.188 112.159-35.188 173.767 0 61.602 11.725 119.378 35.188 173.343 23.467 53.977 55.381 101.13 95.759 141.475 40.385 40.335 87.577 72.225 141.592 95.676 54.021 23.435 111.859 35.16 173.516 35.16 61.653 0 119.489-11.721 173.511-35.16 54.016-23.451 101.218-55.342 141.592-95.676 40.38-40.346 72.303-87.499 95.759-141.475 23.474-53.965 35.199-111.747 35.199-173.343 0.011-61.614-11.721-119.523-35.193-173.767l0 0zM513.042 800.443c-27.891 0-50.495-22.582-50.495-50.451 0-27.857 22.61-50.451 50.495-50.451 27.896 0 50.49 22.593 50.49 50.451 0 27.874-22.598 50.451-50.49 50.451l0 0zM563.532 590.709c0 27.863-22.598 50.462-50.49 50.462-27.891 0-50.495-22.598-50.495-50.462l0-316.084c0-27.874 22.61-50.462 50.495-50.462 27.896 0 50.49 22.588 50.49 50.462l0 316.084zM563.532 590.709z"
                fill="#272636"
                p-id="21407"
              ></path>
            </svg>
          </div>
          <div className="order">Order ID: {orderNo}</div>
        </div>

        <img
          onDoubleClick={() => screen.exitFullscreen("#app-pay")}
          onClick={() => screen.requestFullScreen("#app-pay")}
          src="https://wisecloud3-oss-dev.oss-cn-beijing.aliyuncs.com/markdown/wisecloud_logo_u&d_s.png"
          className="icons"
          alt="Vite logo"
        />
      </TopWrapper>

      <ContentWrapper>
        <div className="amount">
          <label>Amount </label>
          <div />
          <div
            id="number-pad"
            placeholder="请输入数字"
            className="input"
            onClick={() => {}}
          >
            ${amount}
          </div>
        </div>

        <div className="content">
          <label>QS2 Payment Voice Broadcasting</label>
          <span>Demo</span>
        </div>

        <div>
          <Keyboard
            submit={() => pushMsg()}
            onChanged={(key) => {
              console.log("key>>", key);

              let am = amount;

              if (am === "0.00") am = "";

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

              setAmount(am + key);
            }}
          />
        </div>
      </ContentWrapper>

      <Modal visible={visible} onClose={() => setVisible(false)} />
    </MainWrapper>
  );
};

export default MainLayout;
