import { observer } from 'mobx-react-lite';
import React from 'react';
import todo from './store/todo';
import './App.css';

const ToDo = observer(() => {
    return (
        <div className="wrapper__todo">
            <button onClick={() => todo.fetchToDos()}>fetch todos</button>
            {todo.todos.map(t =>
                <div className="todo" key={t.id} checked={t.completed} onChange={() => todo.completeToDo(t.id)}>
                    <div className="todo__name">
                        <input type="checkbox" />
                        <h2>{t.title}</h2>
                    </div>
                    <button onClick={() => todo.removeToDo(t.id)}>X</button>
                </div>
            )}
        </div>
    );
});

export default ToDo;