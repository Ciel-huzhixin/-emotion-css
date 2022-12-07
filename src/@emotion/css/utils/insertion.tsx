import { useLayoutEffect } from "react";
import insertStyle from "./insertStyle";

interface ViewProps {
  serialized: string;
}

const Insertion: React.FC<ViewProps> = ({ serialized }) => {
  useLayoutEffect(() => {
    insertStyle(serialized);
  }, []);
  return null;
};

export default Insertion;
