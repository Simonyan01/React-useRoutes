import { useState } from "react";
import { CircularProgress } from "@mui/material"
import TodoList from "../components/todolist/TodoList"
// import { TodoProvider } from "../components/todolist/todo_provider/Provider";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  setTimeout(() => {
    setIsOpen(true)
  }, 1500);

  return (
    <>
      {
        !isOpen ? (
          <CircularProgress
            sx={{
              display: "flex",
              margin: "8rem auto 6rem",
            }}
          />
        ) : (
          <TodoList />
        )
      }
    </>
  )
}

export default HomePage