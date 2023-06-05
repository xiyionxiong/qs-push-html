import { styled } from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 100vh;
  height: 100%;
  justify-content: space-between;
  background-color: #eaeaea;
`;

export const TopWrapper = styled.div`
  text-align: center;
  display: flex;
  padding: 16px 32px;
  justify-content: space-between;
  align-items: center;

  .left {
    text-align: left;
    .title {
      font-weight: bolder;
      display: flex;
      align-items: center;
    }
    .order {
      font-size: 12px;
    }
  }

  .icons {
    background-color: white;
    padding: 4px;
    width: 48px;
    height: 48px;
    border-radius: 12px;
  }
`;

export const ContentWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: flex-end;
  flex: 1;
  border-radius: 12px 12px 0 0;

  .amount {
    padding: 32px;
    text-align: left;

    label {
    }

    .input {
      font-family: "wechat";
      margin: 0 auto;
      border-radius: 12px;
      font-size: 60px;
      font-weight: bolder;
      text-align: left;
      line-height: 56px;
      outline: none;
      margin-top: 32px;
      min-height: 56px;
    }
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    span,
    label {
      font-size: 20px;
      color: #e9e9e9;
    }
    span {
      font-size: 50px;
    }
  }
`;
