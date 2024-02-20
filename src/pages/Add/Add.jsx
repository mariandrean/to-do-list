import { useForm } from "react-hook-form";
import Button from "../../components/Button/Button";
import { createTask } from "../../services/todos-sevices";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const Add = () => {
    const { register, handleSubmit } = useForm();
    const [goToHome, setGoToHome] = useState(false);
    if (goToHome) return <Navigate to="/" />;

    return goToHome ? <Navigate to="/" /> :
        <>
            <h2>Añadiendo Tarea</h2>
            <form onSubmit={handleSubmit(newTask => createTask(newTask).then(() => setGoToHome(true)))}>
                <input {...register("name", { required: true })} type="text" placeholder="Nueva tarea" />
                <Button type="submit">Agregar</Button>
            </form>
        </>

}

export default Add;