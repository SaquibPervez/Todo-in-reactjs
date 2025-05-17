import React from "react";
import Button from "../button/button";
import { useState } from "react";
import styles from "./todo.module.css";

const TodoApp = () => {
  const [todosInput, settodosInput] = useState("");
  // console.log("todosInput", todosInput)

  const [todos, setTodos] = useState([]);

  const addtodo = () => {
    console.log("add todo", todosInput);
    setTodos([todosInput, ...todos]);
    console.log("settodoes", todos);
    settodosInput("");
  };

  const deleteAll = () => {
    console.log("deleteAll todo");
    setTodos([]);
  };

  const Edit = (indexnum)=>{
    console.log("edithandler", indexnum);
    const newtodo = prompt("Enter new todo", todos[indexnum]);
    todos.splice(indexnum, 1, newtodo);
    setTodos([...todos]);

  }

  const Delete = (indexnum) =>{
    console.log("delete", indexnum);
    todos.splice(indexnum, 1)
    setTodos([...todos]);
  }

  return (
      <div className={styles.main} >
      <div className={styles.container}>
      <h1>Todo App</h1>
      <div>
        <input className={styles.input}
          type="text"
            value={todosInput}
          placeholder="Enter your todo..."
          onChange={(e) => {
            settodosInput(e.target.value);
          }}
        />
        </div>
      <div className={styles.buttons}>
        <Button text="Add Todo" handleClick={addtodo} />
        <Button text="Delete All" handleClick={deleteAll} />
    </div>

      {/* listing */}

     <div>
  <ul className={styles.todoList}>
    {todos.map((todo, index) => (
      <li key={index} className={styles.todoItem}>
        <span className={styles.todoText}>{todo}</span>
        <div className={styles.todoActions}>
          <Button text="Edit" handleClick={() => Edit(index)} />
          <Button text="Delete" handleClick={() => Delete(index)} />
        </div>
      </li>
    ))}
  </ul>
</div>

    </div>
    </div>
  );
};

export default TodoApp;
