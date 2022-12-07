import { serializeStyle } from "./serialize";
import { insertStyle } from "./utils";

const css = (styles: TemplateStringsArray) => {
  const serialize = serializeStyle(styles);
  insertStyle(serialize);
  return "css-" + serialize.name;
};

export default css;
