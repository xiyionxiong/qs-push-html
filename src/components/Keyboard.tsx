import { vibration } from "../request/vibrate";
import { KeyboardWrapper } from "./Keyboard.style";

type Props = {
  onChanged: (key: string) => void;
  submit: VoidFunction;
};

const Keyboard = ({ submit, onChanged }: Props) => {
  const keys = [1, 2, 3, "del", 4, 5, 6, 7, 8, 9, "Pay", 0, "."];

  return (
    <KeyboardWrapper>
      {keys.map((key, index) => {
        return (
          <div
            key={`${index}`}
            className="item"
            onClick={() => {
              vibration()
              if (key === "Pay") {
                submit();
                return;
              }
              onChanged(`${key}`);
            }}
          >
            {key === "del" ? <img src="/backspace.png" /> : key}
          </div>
        );
      })}
    </KeyboardWrapper>
  );
};

export default Keyboard;
