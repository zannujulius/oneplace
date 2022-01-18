import React from "react";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";

function Body(props) {
  return (
    <div
      style={{
        background: "#fdfdfd",
        width: "100%",
        height: "auto",
        display: "flex",
      }}
    >
      {props.children}
    </div>
  );
}

export default Body;
