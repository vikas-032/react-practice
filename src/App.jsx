import "./App.css";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  
  return (
    <div className="App">
      <Header />
      <TaskList title="Random" subtitle="test" />

    </div>
  );
}

export default App;
