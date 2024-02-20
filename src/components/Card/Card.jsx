import { useState } from "react";
import { deleteTask } from "../../services/todos-sevices";
import Button from "../Button/Button";
import { Navigate, useNavigate } from 'react-router-dom'

const Card = ({ toDo }) => {
    const { name, id } = toDo;
    const navigate = useNavigate();
    const [goToHome, setGoToHome] = useState(false);
    
    return goToHome ? <Navigate to="/" /> : 
        <li id={id} className="card">
            <h3>{name}</h3>
            <Button onClick={() => navigate(`/edit/${id}`)}>Modificar</Button>
            <Button onClick={() => deleteTask(id).then(() => setGoToHome(true))}>Eliminar</Button>
        </li>
    
}

export default Card;