import React,
        { useState, } from "react";
import "../asset/css/todoitem.css";



const TodoItem = (props) => {
    const [ {item} ] = useState(props);
    // const [handleChange] = useState(() => props.handleChange);
    // const [completed] = useState(props.item.completed)
    console.log(props.item);

    const completeStyle = {
        fontStyle: "italic",
        color: "#A0CFC4",
        textDecoration: "line-through"
    };

    return (
      <div className="todo-item">
        <input
          type="checkbox"
          onChange={() => props.handleChange(item.id)}
        />
        <p 
        className={props.item.completed ? completeStyle : null}
        >
        {item.text}
        </p>
      </div>
    );
}

export default TodoItem;
