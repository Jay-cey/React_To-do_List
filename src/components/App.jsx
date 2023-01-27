import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    // let li = event.target.value;
    setItem(event.target.value);
  }

  function handleClick() {
    if (item !== "") {
      setItems((prevValue) => {
        return [...prevValue, item];
      });
      setItem("");
      console.log(items);
      console.log(item);
    }
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={item} name="list" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((e) => (
            <ToDoItem text={e} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
