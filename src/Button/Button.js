import React from "react";
import classes from "./Button.module.css";

export default function Button(props) {
  return (
    <button
      className={classes.button}
      style={{
        backgroundColor: `${props.color}`,
        border: `1px solid ${props.color}`,
      }}
    >
      {props.text}
    </button>
  );
}
