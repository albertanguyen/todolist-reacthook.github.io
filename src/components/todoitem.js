import React,
        { useState } from "react";
import "../asset/css/todoitem.css";



const TodoItem = (props) => {
    const [ {item} ] = useState(props);

    return (
      <div className="todo-item">
        <input
          type="checkbox"
          onChange={() => props.handleChange(item.id)}
        />
        <p 
        style={props.completeStyle}
        >
        {item.text}
        </p>
      </div>
    );
}

export default TodoItem;
