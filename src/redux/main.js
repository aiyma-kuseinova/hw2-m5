import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Button, TextField, Box } from '@mui/material';
import Todolist from './todolist';

const Main = () => {
    const dispatch = useDispatch();
    const [todo, setTodo] = useState();

    const todos = useSelector((state) => state.todos);

    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    const handleClick = () => {
        dispatch({
            type: 'ADD_TODO',
            payload: { label: todo, id: Math.ceil(Math.random() * 500)},
        });
    };
    const handleDeleteAll = () => {
        dispatch({
            type: 'CLEAR',
        });
    };

    return (
        <Box
            sx={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}>
            <Box sx={{ display: 'flex' }}>
                <TextField
                    onChange={handleChange}
                    placeholder="add todo"
                ></TextField>
                <Button onClick={handleClick} variant="contained">
                    Add
                </Button>

                <Button onClick={handleDeleteAll} variant="contained">
                    Delete
                </Button>
            </Box>
            <Todolist />
        </Box>
    );
};

export default Main;
