import './Home.css';
import Button from '../../components/Button/Button'
import { useLoaderData } from 'react-router-dom';
import Card from '../../components/Card/Card';
/* import { useEffect, useState } from 'react'; */


function Home() {

    const tasks = useLoaderData();

    return(
        <>
            <a href="/add"><Button>Agregar nueva tarea</Button></a>
            <ul>{tasks.map(task => (
                    <Card key={task.id} toDo={task}/>
            ))}</ul>
        </>
    )
}

export default Home;