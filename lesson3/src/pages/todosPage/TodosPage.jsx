import React from 'react';
import Todo from "../../components/todo/Todo";
import classes from "./todosPage.module.css";

function TodosPage() {
    const todosArray = ["todo 1", "todo 2", "todo 3"]
    const todoComponents = todosArray.map((todos, index) => {
        return <Todo key={index} text={todos}/>;
    });
    return (
        <div>
            <h2 className={classes.title}>Todos</h2>
            <span>{todoComponents}</span>
        </div>
    );
}

export default TodosPage;