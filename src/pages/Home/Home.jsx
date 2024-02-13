import './Home.css';
import Button from '../../components/Button/Button'
import { useEffect, useState } from 'react';


function Home() {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/todos")
        .then(response => response.json())
        .then(list => setTodos(list));
    },[]);

    return(
        <>
            <h1>Mi lista de tareas</h1>
            <section>{todos.map(todo => (<p>{todo.name}</p>))}</section>
            <Button/>
        </>
    )
}

export default Home;