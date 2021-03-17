import { useState, useEffect } from 'react';
import Todo from './Todo';

const List = () => {
    const [todos, setTodos] = useState([]);
    
    const retrieveExistingTodos = () => {
        if(localStorage.getItem('todos')){
            const list = localStorage.getItem('todos');
            setTodos(JSON.parse(list));
        };
    }

    const addTodo = (e) => {
        e.preventDefault();   
        const newTodos = todos.slice();
        newTodos.push(e.target.item.value);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
        e.target.reset();
    }

    const completeTodo = (e) => {
        e.target.classList.toggle('isComplete');
    }
    useEffect(retrieveExistingTodos, []);
    return(
        <>
            <h1>The List</h1>
            <ul>
                {todos.length ? todos.map(todo => <Todo todo={todo} completeTodo = {completeTodo} key={Math.random()} />) : <p>Nothing here yet!</p>}
            </ul>
            <form onSubmit={addTodo}>
                <input type="text" id="item" placeholder="Enter a new task"/>
            </form>
        </>
    )
}

export default List;