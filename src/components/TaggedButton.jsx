import React from "react";

function TaggedButton(props) {
  return <button>{props.tag.toUpperCase()}</button>;
}

export default TaggedButton;
