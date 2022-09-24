import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './todolist.module.css'


const Todolist = () => {
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todos)

    const handleDelete = (id) => {
        dispatch({
            type: 'DELETE_TODO',
            payload: id
        })
    }
    return (
        <div>
            <ul style={style}>
                {todos.map((todo, i) => (<li key={i} onClick={() => handleDelete(todo.id)}>{todo.label}</li>))}
            </ul>
        </div>
    );
}

export default Todolist;
