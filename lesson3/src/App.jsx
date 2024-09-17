 import Description from './components/description/Description';
import './App.css';
 import AboutPage from "./pages/aboutPage/AboutPage";
 import MainPage from "./pages/mainPage/MainPаge";
 import TodosPage from "./pages/todosPage/TodosPage";
 import Todo from "./components/todo/Todo";


function App() {
  return (
    <div className="App">
        <Description />
        <MainPage/>
        <AboutPage/>
        <TodosPage/>
        <Todo/>
    </div>
  );
}

export default App;
