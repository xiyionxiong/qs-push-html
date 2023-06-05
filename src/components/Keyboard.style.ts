import { styled } from "styled-components";

export const KeyboardWrapper = styled.div`
  grid-template-columns: 1fr 1fr 1fr 1fr;
  display: grid;
  grid-row-gap: 8px;
  grid-column-gap: 8px;
  background-color: #f6f6f6;
  padding: 8px;

  .item {
    background-color: white;
    min-height: 48px;
    border-radius: 6px;
    font-weight: bolder;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-family: "wechat";
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.1);

    &:active {
      box-shadow: none;
      color: #2d6ded;
    }

    img {
      width: 24px;
    }

    &:nth-child(12) {
      grid-column-start: span 2;
    }

    &:nth-child(4) {
      grid-column-start: 4;
      grid-column-end: 5;
      grid-row-start: 1;
      grid-row-end: 3;
    }

    &:nth-child(11) {
      grid-column-start: 4;
      grid-column-end: 5;
      grid-row-start: 3;
      grid-row-end: 5;
      background-color: #2d6ded;
      color: white;
      font-family: Arial, "Times New Roman", "Microsoft YaHei", SimHei;

      &:active {
        color: #2d6ded;
        background-color: white;
      }
    }
  }
`;
