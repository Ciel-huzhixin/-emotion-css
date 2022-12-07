import { HTMLProps } from "react";
import { serializeStyle } from "../css/serialize";

const css = (styleObj: Partial<CSSStyleDeclaration>) => {
  return serializeStyle(styleObj);
};

export default css;
