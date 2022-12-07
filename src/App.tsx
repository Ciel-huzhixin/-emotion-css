/**@jsx jsx */
/**
 * 告诉babel在转译jsx代码的时候，把jsx转换成jsx方法调用
 * React.createElement => jsx()
 */
import { useState } from "react";
// import { css } from "./@emotion/css";
import { css, jsx } from "./@emotion/react";

// const classNameA = css`
//   color: red;
//   font-size: 20px;
//   background-color: #ccc;
// `;

const classNameA = css({
  color: "red",
  fontSize: "20px",
  backgroundColor: "#ccc",
});

function App() {
  return <div css={classNameA}>app</div>;
}

export default App;
