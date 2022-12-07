import React from "react";
import { Insertion } from "../css/utils";

const jsx = (
  type: string,
  props: Record<string, any>,
  ...children: React.ReactNode[]
) => {
  return (
    <Emotion {...props} type={type}>
      {children}
    </Emotion>
  );
};

const Emotion = (props: Record<string, any>) => {
  const WrappedComponent = props.type;
  const serialized = props.css;
  const { css, ...restProps } = props;
  restProps.className = "css-" + serialized.name;
  return (
    <>
      <WrappedComponent {...restProps} />
      <Insertion serialized={serialized} />
    </>
  );
};

export default jsx;
