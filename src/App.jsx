import React, { lazy, Suspense } from "react";
import "./App.css";
// import AddTask from "./components/AddTask";
import Container from "./components/Container";
import Header from "./components/Header";
// import TaskList from "./components/TaskList";

const AddTask = lazy(() => import("./components/AddTask"));
const TaskList = lazy(() => import("./components/TaskList"));

function App() {
  return (
    <>
      <Container>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <AddTask />
          <TaskList />
        </Suspense>
      </Container>
    </>
  );
}

export default App;
