import { deleteToDo } from "../../services/todos-sevices";
import Button from "../Button/Button";

const Card = ({ toDo }) => {
    const { name, id } = toDo;

    return (
        <li id={id} className="card">
            <h3>{name}</h3>
            <Button onClick={() => deleteToDo(id)}>Eliminar</Button>
        </li>
    )
}

export default Card;