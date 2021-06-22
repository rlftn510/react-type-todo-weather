import { useState, useCallback } from "react";
import { TextField, Container, Card } from "@material-ui/core";
import TodoList from "./TodoList";

export interface TTodoItem {
  key: string;
  value: string;
  checked: boolean;
}

const Todo = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todoListArr, setTodoListArr] = useState<TTodoItem[] | []>([]);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const key = new Date().toISOString();
      setTodoListArr((prev: any) => {
        return [
          ...prev,
          {
            key: key.toString(),
            value: todoInput,
            checked: false,
          },
        ];
      });
    },
    [todoInput]
  );

  const handleTodoInput = useCallback((e) => {
    setTodoInput(e.target.value);
  }, []);
  return (
    <Container style={{ marginTop: "50px" }}>
      <TextField value={todoInput} onChange={handleTodoInput}></TextField>
      <button onClick={onSubmit}>클릭</button>
      <Card>
        {todoListArr.map((el: TTodoItem) => {
          console.log(el);
          return <li key={el.key}>{el.value}</li>;
        })}
        <TodoList></TodoList>
      </Card>
    </Container>
  );
};

export default Todo;
