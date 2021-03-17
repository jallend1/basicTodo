import { useState } from 'react';

const List = () => {
    const [todos, setTodos] = useState([]);
    const addTodo = (e) => {
        e.preventDefault();   
        const newTodos = todos.slice();
        newTodos.push(e.target.item.value);
        setTodos(newTodos);
        e.target.reset();
    }

    return(
        <>
            <h1>The List</h1>
            {todos.length ? todos.map(todo => <p>{todo}</p>) : <p>Nothing here yet!</p>}
            <form onSubmit={addTodo}>
                <input type="text" id="item" placeholder="Enter a new item"/>
            </form>
        </>
    )
}

export default List;