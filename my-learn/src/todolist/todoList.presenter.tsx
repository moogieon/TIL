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

export default function TodoListUI() {
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
            <TodoInput></TodoInput>
            <Add>추가</Add>
          </ListBox>
          <Line />
          <ListBox>
            <TodoList></TodoList>
            <Delete>삭제</Delete>
          </ListBox>
        </Body>
      </Wrapper>
    </>
  );
}
