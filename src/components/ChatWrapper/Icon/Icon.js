import React from "react";
import "./Icon.css";

function Icon(props) {
    return (
        <button className="icon text-white" onClick={() => props.onClick(true)}>
            Icon
        </button>
    );
}

export default Icon;
