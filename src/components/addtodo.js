import React, { useState, useEffect, createRef } from "react";
// import "../asset/css/addtodo.css";
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
      console.log(todoList);
                };
    // useEffect(()=> {
    //   todoList.map(item => handleChange(item.id));
    // });

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
                                    handleChange = { () => handleChange(item.id)}
                                  />
            )}
        </div>
      </div>
    );
}

export default AddTodo;