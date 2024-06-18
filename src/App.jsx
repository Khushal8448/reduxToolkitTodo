import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todo";

function App() {
  return (
    <div className="flex flex-col flex-grow">
      <h1 className="text-center mt-20 font-bold text-4xl text-slate-200">
        Todo App With Redux Toolkit
      </h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
