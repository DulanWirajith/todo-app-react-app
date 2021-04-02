import axios from "axios";
import { FETCH_DATA, FETCH_ERROR, FETCH_SUCCESS, ADD_TODO } from "./todoTypes";

export const fetchData = () => {
  return {
    type: FETCH_DATA,
  };
};

export const fetchSuccess = (todos) => {
  return {
    type: FETCH_SUCCESS,
    payload: todos,
  };
};

export const fetchError = (errorMessage) => {
  return {
    type: FETCH_ERROR,
    payload: errorMessage,
  };
};

export const addOneToDo = (todos) => {
  return {
    type: ADD_TODO,
    payload: todos,
  };
};

export const fetchToDos = () => {
  // in here we return a function
  return (dispatch) => {
    //   set loading to true
    dispatch(fetchData);
    // call get data request
    axios
      .get("http://localhost:5000/api/get_todos")
      .then((response) => {
        //   if responce success, set todos to payload
        const todos = response.data;
        console.log(response);
        console.log(todos);
        dispatch(fetchSuccess(todos.message));
      })
      .catch((error) => {
        //   if responce unsuccess, set errorMessage to payload
        const errorMessage = error.message;
        dispatch(fetchError(errorMessage));
      });
  };
};

export const addToDo = (my_todo) => {
  // in here we return a function
  return (dispatch) => {
    // call get data request
    axios
      .post("http://localhost:5000/api/add_todo", {
        todo_name: my_todo,
      })
      .then(function (response) {
        console.log(response.data);
        // dispatch(addOneToDo(response.data.message));
        fetchToDos();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const removeToDo = (my_todo_id) => {
  // in here we return a function
  return (dispatch) => {
    // call get data request
    axios
      .post("http://localhost:5000/api/remove_todo", {
        _id: my_todo_id,
      })
      .then(function (response) {
        console.log(response.data);
        // dispatch(addOneToDo(response.data.message));
        fetchToDos();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const updateToDo = (my_todo_id) => {
  // in here we return a function
  return (dispatch) => {
    // call get data request
    axios
      .post("http://localhost:5000/api/update_todo", {
        _id: my_todo_id,
        completed: true,
      })
      .then(function (response) {
        console.log(response.data);
        // dispatch(addOneToDo(response.data.message));
        fetchToDos();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
