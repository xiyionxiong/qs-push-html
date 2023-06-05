import useContext from "../GlobalState";
import { Button, Content, ResultsWrapper } from "./Results.style";

type Props = {};

const ResultsLayout = ({}: Props) => {
  const { orderNo, amount, toHome } = useContext();

  return (
    <ResultsWrapper>
      <img className="succeed" src="/succeed.svg" />
      <div className="text">Succeed!</div>
      <div className="label">Amount</div>
      <div className="amount">${(+amount).toFixed(2)}</div>

      <Content>
        <div className="result-content-item">
          <label>Order ID:</label>
          <span>{orderNo ?? "3293828393829"}</span>
        </div>

        <div className="result-content-item">
          <label>Pay time:</label>
          <span>{new Date().toLocaleString()}</span>
        </div>
      </Content>
      <Button onClick={() => toHome()}>Back</Button>
    </ResultsWrapper>
  );
};

export default ResultsLayout;
