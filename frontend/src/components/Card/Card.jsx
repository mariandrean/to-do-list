import { useState } from "react";
import { deleteTask } from "../../services/todos-sevices";
import Button from "../Button/Button";
import { useNavigate } from 'react-router-dom'

const Card = ({ toDo }) => {
    const { name, id } = toDo;
    const navigate = useNavigate();
    
    return (
        <li id={id} className="card">
            <h3>{name}</h3>
            <Button onClick={() => navigate(`/edit/${id}`)}>Modificar</Button>
            <Button onClick={() => deleteTask(id).then((result) => result && navigate("/"))}>Eliminar</Button>
        </li>
    )
    
}

export default Card;