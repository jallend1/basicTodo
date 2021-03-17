const Todo = ({todo, completeTodo}) => {
    return (
        <li key={Math.random()} onClick={completeTodo}>{todo}</li>
    )
}

export default Todo;