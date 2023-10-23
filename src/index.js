import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom"
import { TodoProvider } from "./components/todolist/todo_provider/Provider"
import App from "./App"
import "./App.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <TodoProvider>
    <Router>
      <App />
    </Router>
  </TodoProvider>,
)
