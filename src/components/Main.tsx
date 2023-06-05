import { useEffect, useMemo, useState } from "react";
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

  const isMobileEdge = useMemo(
    () =>
      navigator.userAgent.includes("EdgA") &&
      navigator.userAgent.includes("Mobile"),
    []
  );
  return (
    <MainWrapper id="app-pay">
      <TopWrapper>
        <div className="left">
          <div className="title">
            Pay to Wiseasy{" "}
            {isMobileEdge && (
              <svg
                style={{ marginLeft: 12 }}
                onClick={() => screen.requestFullScreen("#app-pay")}
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="22435"
                width="16"
                height="16"
              >
                <path
                  d="M213.333333 213.333333 426.666667 213.333333 426.666667 298.666667 298.666667 298.666667 298.666667 426.666667 213.333333 426.666667 213.333333 213.333333M597.333333 213.333333 810.666667 213.333333 810.666667 426.666667 725.333333 426.666667 725.333333 298.666667 597.333333 298.666667 597.333333 213.333333M725.333333 597.333333 810.666667 597.333333 810.666667 810.666667 597.333333 810.666667 597.333333 725.333333 725.333333 725.333333 725.333333 597.333333M426.666667 725.333333 426.666667 810.666667 213.333333 810.666667 213.333333 597.333333 298.666667 597.333333 298.666667 725.333333 426.666667 725.333333Z"
                  p-id="22436"
                ></path>
              </svg>
            )}
          </div>
          <div className="order">Order ID: {orderNo}</div>
        </div>

        <img
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
