import { useForm } from "react-hook-form";
import Button from "../../components/Button/Button";
import { createTask } from "../../services/todos-sevices";
import { useNavigate } from "react-router-dom";

const Add = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    return (
        <>
            <h2>Añadiendo Tarea</h2>
            <form onSubmit={handleSubmit(newTask => createTask(newTask).then(() => navigate("/")))}>
                <input {...register("name", { required: true })} type="text" placeholder="Nueva tarea" />
                <Button type="submit">Agregar</Button>
            </form>
        </>
    )

}

export default Add;