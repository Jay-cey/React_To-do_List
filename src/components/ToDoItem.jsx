import React, { useState } from "react";

function ToDoItem(e) {
  let [state, setState] = useState(false);

  function handleClick() {
    setState(!state);
  }

  return (
    <div>
      <li
        onClick={handleClick}
        style={{
          textDecoration: state ? "line-through" : "none",
          cursor: "pointer"
        }}
      >
        {e.text}
      </li>
    </div>
  );
}

export default ToDoItem;
