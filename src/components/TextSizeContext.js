import React from "react";

const TextSizeContext = React.createContext({
  size: "medium",
  setSize: () => {},
});

export default TextSizeContext;
