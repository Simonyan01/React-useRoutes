import { createContext, useContext, useState } from "react";
import { data } from "../data/data.js"

const Context = createContext({})

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState(data)

    return (
        <Context.Provider value={{ todos, setTodos }}>
            {children}
        </Context.Provider>
    )
}

export const TodoData = () => {
    return useContext(Context)
}