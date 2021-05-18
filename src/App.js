import "./App.css";
import { Container } from "./components/Container";
import styled from "styled-components";
import { Input, DatePicker, Button, Checkbox } from "antd";
import { TodoItem } from "./components/TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { add_todo } from "./store/actions";
import { set_filter, ALL, COMPLETED, ACTIVE } from "./store/actions";

// sub-components
const Title = styled.h1`
  text-align: center;
  margin-bottom: 10px;
`;

const InputBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

// main component
function App() {
  // hooks
  const [text, setText] = useState("");
  const [date, setDate] = useState("");

  // store
  const todos = useSelector((state) => state.todos);
  const currentFilter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  function onChangeDate(date) {
    // console.log(date, dateString);
    setDate(date);
  }

  // onclick button Add
  const onAdd = () => {
    text && date && dispatch(add_todo(text, date));
  };

  const filtered_todos = () => {
    switch (currentFilter) {
      case ALL:
        return todos;

      case COMPLETED:
        return todos.filter((el) => el.checked === true);

      case ACTIVE:
        return todos.filter((el) => el.checked === false);

      default:
        return todos;
    }
  };

  return (
    <div className="App">
      <Container>
        <Title>Todo List</Title>
        <InputBlock>
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="type smth ..."
            style={{ width: 350 }}
          />
          <DatePicker value={date} onChange={onChangeDate} />
          <Button onClick={onAdd} type="primary">
            Add
          </Button>
        </InputBlock>
        <div>
          <Checkbox
            checked={currentFilter === ALL}
            style={{ marginRight: 10 }}
            onChange={() => {
              dispatch(set_filter(ALL));
            }}
          >
            All
          </Checkbox>
          <Checkbox
            checked={currentFilter === COMPLETED}
            style={{ marginRight: 10 }}
            onChange={() => {
              dispatch(set_filter(COMPLETED));
            }}
          >
            Completed
          </Checkbox>
          <Checkbox
            checked={currentFilter === ACTIVE}
            style={{ marginRight: 10 }}
            onChange={() => {
              dispatch(set_filter(ACTIVE));
            }}
          >
            Active
          </Checkbox>
        </div>
        <div>
          {filtered_todos().map((el, id) => {
            return <TodoItem key={id} id={el.id} todo={el} />;
          })}
        </div>
      </Container>
    </div>
  );
}

export default App;
