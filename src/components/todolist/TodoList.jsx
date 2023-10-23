import { TodoData } from "./todo_provider/Provider";
import TodoFooter from "./footer/TodoFooter";
import TodoForm from "./form/TodoForm";
import TodoItems from "./items/TodoItems";

const TodoList = () => {
    const { todos, setTodos } = TodoData()

    return (
        <section className="bg-white rounded-2xl leading-[3] mt-[4rem] max-w-full font-raleway">
            <div className="w-[700px]">
                <TodoForm
                    onAdd={(text) => {
                        setTodos([{
                            id: Math.random(),
                            text: text,
                            isCompleted: false,
                        }, ...todos])
                    }}
                />
                <TodoItems
                    todos={todos}
                    onDelete={(todo) => {
                        setTodos(todos.filter((prev) => prev.id !== todo.id));
                    }}
                    onChange={(newTodo) => {
                        setTodos(
                            todos.map((todo) => {
                                return todo.id === newTodo.id ? newTodo : todo;
                            })
                        );
                    }}
                />
                <TodoFooter
                    todos={todos}
                    onClearCompleted={() => {
                        setTodos(todos.filter((todo) => !todo.isCompleted));
                    }}
                />
            </div>
        </section>
    );
};

export default TodoList;
