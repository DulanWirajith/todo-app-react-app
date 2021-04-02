import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import ToDosComponent from "./components/ToDosComponent";
import ToDoAddComponent from "./components/ToDoTitle";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ToDoAddComponent></ToDoAddComponent>
        <ToDosComponent></ToDosComponent>
      </div>
    </Provider>
  );
}

export default App;
