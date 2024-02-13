const Card = ({ toDo }) => {
    const { name, id } = toDo;

    return (
        <li id={id} className="card">
            <h3>{name}</h3>
        </li>
    )
}

export default Card;