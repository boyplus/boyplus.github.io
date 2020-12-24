import css from "styled-jsx/css";
export default css`
  .nav {
    display: flex;
    justify-content: flex-end;
  }
  .item {
    font-size: 18px;
    font-weight: 300;
    opacity: 0.7;
    transition: 0.25s;
    width: 130px;
    display: flex;
    justify-content: center;
  }
  .item:hover {
    opacity: 1;
    transition: 0.25s;
  }
  .active {
    font-weight: 600;
    opacity: 1;
  }
`;
