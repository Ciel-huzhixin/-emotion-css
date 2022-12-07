import { hashString } from "../utils";

const serializeStyle = (
  styleStrings: TemplateStringsArray | Partial<CSSStyleDeclaration>,
  ...restProps: any[]
) => {
  let styles = "";
  if ("raw" in styleStrings) {
    styles += styleStrings[0];
  } else {
    styles += handleInterpolation(styleStrings);
  }
  const name = hashString(styles);
  return {
    styles,
    name,
  };
};

const handleInterpolation = (interpolation: Partial<CSSStyleDeclaration>) => {
  switch (typeof interpolation) {
    case "object":
      return createStringFromObject(interpolation);
  }
};

const createStringFromObject = (
  interpolation: Partial<CSSStyleDeclaration>
) => {
  let string = "";
  for (const key in interpolation) {
    string += `${key}: ${interpolation[key]};`;
  }
  return string;
};

export default serializeStyle;
