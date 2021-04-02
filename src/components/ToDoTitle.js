import React, { useEffect } from "react";
import { fetchToDos, addToDo } from "../redux";
import { useDispatch, useSelector } from "react-redux";
import "antd/dist/antd.css";
import { Form, Row, Col, Button, Input } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import "./styles.scss";

function ToDoAddComponent() {
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const submitToDo = () => {
    dispatch(addToDo(form.getFieldValue("name")));
    dispatch(fetchToDos());
    form.resetFields();
  };

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
      <h2>ToDo List</h2>
      <div>
        <Form
          form={form}
          onFinish={submitToDo}
          layout="horizontal"
          className="todo-form-top"
        >
          <Row gutter={20}>
            <Col xs={24} sm={24} md={17} lg={19} xl={20}>
              <Form.Item
                name={"name"}
                rules={[{ required: true, message: "This field is required" }]}
              >
                <Input placeholder="Enter todo here" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={7} lg={5} xl={4}>
              <Button className="add-todo-button" htmlType="submit" block>
                <PlusCircleFilled />
                Add todo
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default ToDoAddComponent;
