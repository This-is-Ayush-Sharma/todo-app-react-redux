import "./App.css";
import AddTask from "./components/AddTask";
import Container from "./components/Container";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <Container>
        <Header />
        <AddTask />
        <TaskList />
      </Container>
    </>
  );
}

export default App;
