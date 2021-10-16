import {
  Wrapper,
  Head,
  Tilte,
  Text1,
  Body,
  ListBox,
  Line,
  TodoInput,
  Add,
  TodoList,
  Delete,
} from "./todoList.styles";

export default function TodoListUI(props) {
  return (
    <>
      <Wrapper>
        <Head>
          <Tilte>
            <Text1>ToDo List</Text1>
          </Tilte>
        </Head>
        <Body>
          <ListBox>
            <TodoInput id="list" onChange={props.onChangeTodo}></TodoInput>
            <Add onClick={props.onClickAdd(props.todo)}>추가</Add>
          </ListBox>
          <Line />
          <ListBox>
            <TodoList>{props.todo}</TodoList>
            <Delete>삭제</Delete>
          </ListBox>
        </Body>
      </Wrapper>
    </>
  );
}
