import { useState, useCallback } from "react";
import {
  TextField,
  Container,
  Card,
  List,
  Checkbox,
  ListItem,
  Button,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import TodoList from "./TodoList";
import styled from "styled-components";

const MuiDeleteIcon = styled(DeleteIcon)`
  position: absolute;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
`;

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
      if (todoInput === "") return;
      // const key = new Date().toISOString();
      const key =
        todoListArr.length !== 0
          ? parseInt(todoListArr[todoListArr.length - 1].key) + 1
          : 1;

      console.log(key);
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
      setTodoInput("");
    },
    [todoInput]
  );

  const onKeydownChat = (e: any) => {
    console.log(e);
  };

  const onChecked = (key: string) => {
    const arr = todoListArr.map((item: any) => {
      if (item.key === key) {
        return {
          ...item,
          checked: !item.checked,
        };
      } else {
        return item;
      }
    });

    setTodoListArr(arr);
  };
  // const onDelete = useCallback(
  //   (key: any) => {
  //     setTodoListArr(todoListArr.filter((el) => el.key !== key));
  //   },
  //   [todoListArr]
  // );
  const onDelete = (key: any) => {
    setTodoListArr(todoListArr.filter((el) => el.key !== key));
  };

  const handleTodoInput = useCallback((e) => {
    setTodoInput(e.target.value);
  }, []);
  return (
    <Container style={{ marginTop: "50px" }}>
      <form onSubmit={onSubmit}>
        <TextField
          value={todoInput}
          onChange={handleTodoInput}
          onKeyUp={(e) => (e.key === "Enter" ? onSubmit : null)}
        ></TextField>
        <Button onClick={onSubmit}>클릭</Button>
      </form>
      <Card>
        <List>
          {todoListArr.map((el: TTodoItem) => {
            return (
              <ListItem key={el.key} divider>
                <Checkbox
                  checked={el.checked}
                  onClick={() => onChecked(el.key)}
                />
                {el.value}

                {/* <Button > */}
                <MuiDeleteIcon onClick={() => onDelete(el.key)} />
                {/* </Button> */}
              </ListItem>
            );
          })}
        </List>
        <TodoList></TodoList>
      </Card>
    </Container>
  );
};

export default Todo;
