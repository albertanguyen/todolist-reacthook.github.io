import React, { useState, createRef } from "react";
import TodoItem from "./todoitem";
import todosData from "../todosData";


// Using Ref to store todoitem into DOM node: https://reactjs.org/docs/refs-and-the-dom.html
// https://www.kirupa.com/react/simple_todo_app_react.htm



function AddTodo() {
    const [todoList, setTodoList ] = useState(todosData);

    const handleChange = (id) => {
      setTodoList(todoList.map(item => {
                          if (item.id === id) {
                            item.completed = !item.completed
                          }
                        return item;
                        })
                  )
                };

    const completeStyle = {
      fontStyle: "italic",
      color: "#A0CFC4",
      textDecoration: "line-through",
    };
  

    return (
      <div className="container">
        <div className="header">
          {/* <form onSubmit={e => addItem(e)}> */}
          <form>
            <input ref={() => createRef()} placeholder="enter task"></input>
            <button type="submit">add</button>
          </form>
        </div>
        <div className="todo-list">
          {todoList.map(item => <TodoItem 
                                    key={item.id}
                                    item={item}
                                    completeStyle = {item.completed ? completeStyle : null}
                                    handleChange = { () => handleChange(item.id)}
                                  />
            )}
        </div>
      </div>
    );
}

export default AddTodo;