import { useForm } from "react-hook-form";
import Button from "../../components/Button/Button";
import { createToDo } from "../../services/todos-sevices";

const Create = () => {
    const {register, handleSubmit} = useForm();
    
    return (
        <form onSubmit={handleSubmit(newTask => createToDo(newTask))}>
            <input {...register("name", {required: true})} type="text" placeholder="Nueva tarea"/>
            <Button type="submit">Agregar</Button>
        </form>
    )
}

export default Create;