import { useForm } from "react-hook-form";
import Button from "../../components/Button/Button";
import { createTask } from "../../services/todos-sevices";

const Add = () => {
    const {register, handleSubmit} = useForm();
    
    return (
        <form onSubmit={handleSubmit(newTask => createTask(newTask))}>
            <input {...register("name", {required: true})} type="text" placeholder="Nueva tarea"/>
            <Button type="submit">Agregar</Button>
        </form>
    )
}

export default Add;