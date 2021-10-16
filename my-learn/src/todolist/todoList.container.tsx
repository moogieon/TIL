import { useState } from "react";
import TodoListUI from "./todoList.presenter";

export default function TodoList() {
  const [todo, setTodo] = useState("");
  const onClickAdd = (event) => {};
  function onChangeTodo(event: any) {
    setTodo(event.target.value);
    console.log("글", todo);
  }
  return (
    <TodoListUI
      onClickAdd={onClickAdd}
      todo={todo}
      onChangeTodo={onChangeTodo}
    />
  );
}
