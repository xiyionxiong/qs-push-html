import { styled } from "styled-components";

export const ResultsWrapper = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;

  .succeed {
    width: 64px;
    align-self: center;
    height: 64px;
    background-color: #09bb07;
    border-radius: 50%;
    margin: 32px 0 16px;
  }

  .text {
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    color: #09bb07;
  }

  .label {
    margin-top: 36px;
    font-size: 18px;
    text-align: center;
    color: #666666;
  }

  .amount {
    font-family: "wechat";
    margin: 0px auto 35px;
    border-radius: 12px;
    font-size: 40px;
    font-weight: bolder;
  }
`;

export const Button = styled.div`
  background-color: #2d6ded;
  height: 56px;
  font-weight: bold;
  color: white;
  line-height: 56px;
  border-radius: 6px;

  margin: 120px 16px 0;
  text-align: center;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.1);

  &:active {
    box-shadow: none;
  }
`;
export const Content = styled.div`
  /* background-color: #eaeaea; */
  /* height: 100px; */
  padding: 10px 0;
  border-top: 1px solid #e6e6e6;
  margin: 0 16px;

  .result-content-item {
    height: 32px;
    display: flex;
    color: black;
    justify-content: space-between;
    font-size: 13px;
    align-items: center;

    label {
      color: #666;
    }

    span {
      font-weight: bold;
    }
  }
`;
