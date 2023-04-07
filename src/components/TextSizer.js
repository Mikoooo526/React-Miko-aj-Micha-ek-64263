import React, { useContext, useState } from "react";
import TextSizeContext from "./TextSizeContext";

function TextSizer() {
  const [textSize, setTextSize] = useState("medium");
  const textSizeContext = useContext(TextSizeContext);

  const handleSizeChange = () => {
    if (textSize === "small") {
      setTextSize("medium");
      textSizeContext.setSize("medium");
    } else if (textSize === "medium") {
      setTextSize("large");
      textSizeContext.setSize("large");
    } else if (textSize === "large") {
      setTextSize("small");
      textSizeContext.setSize("small");
    }
  };

  return (
    <div>
      <button onClick={handleSizeChange}>Zmień wielkość tekstu</button>
    </div>
  );
}

export default TextSizer;
