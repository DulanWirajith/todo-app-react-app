import React, { useEffect } from "react";
import { fetchToDos, removeToDo, updateToDo } from "../redux";
import { useDispatch, useSelector } from "react-redux";
import "antd/dist/antd.css";
import { Button, Divider, Tag } from "antd";
import "./styles.scss";

function ToDosComponent() {
  function deleteToDo(e) {
    e.preventDefault();
    dispatch(removeToDo(e.currentTarget.id));
    dispatch(fetchToDos());
  }

  function markAsRead(e) {
    e.preventDefault();
    dispatch(updateToDo(e.currentTarget.id));
    dispatch(fetchToDos());
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchToDos());
    // dispatch(addToDo("Test test"));
  }, []);

  const todosData = useSelector((state) => state.todo);

  console.log(todosData);
  return todosData.loading ? (
    <div>
      <h2>Loading ToDos</h2>
    </div>
  ) : todosData.error ? (
    <div>Error Occured</div>
  ) : (
    <div>
      <div>
        <Divider orientation="left">
          My TODOs - Completed TODOS are shown in cyan color
        </Divider>
        {/* <List
          size="small"
          bordered
          dataSource={todosData.todos.todo_name}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        /> */}
      </div>
      <div>
        {todosData.todos.map((oneTodo) => (
          <div className="one-todo">
            {/* <p>{oneTodo.todo_name}</p> */}
            <div className="todo-item">
              <Tag
                color={oneTodo.completed ? "cyan" : "red"}
                className="todo-tag"
              >
                {oneTodo.todo_name}
              </Tag>

              <Button
                className="read-todo-button"
                type="primary"
                success
                id={oneTodo._id}
                onClick={markAsRead}
              >
                Mark as Read
              </Button>

              <Button
                className="remove-todo-button"
                type="primary"
                danger
                id={oneTodo._id}
                onClick={deleteToDo}
              >
                X
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToDosComponent;
