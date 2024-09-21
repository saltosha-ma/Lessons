import { useState } from "react";

function Todo({ todo, deleteTodo, updateTodoStatus, updateTodoTitle }) {
    const [newTitle, setNewTitle] = useState(todo.title);

    return (
        <li>
            <input
                type="checkbox"
                checked={todo.status}
                onChange={(e) => updateTodoStatus(todo.id, e.target.checked)}
            />
            <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
            />
            <button onClick={() => updateTodoTitle(todo.id, newTitle)}>
                Обновить
            </button>
            <span className={todo.status ? "checked" : ""}>{todo.title}</span>
            <button onClick={() => deleteTodo(todo.id)}>Удалить</button>
        </li>
    );
}

export default Todo;