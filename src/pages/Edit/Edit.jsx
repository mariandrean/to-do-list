import { useForm } from "react-hook-form";
import Button from "../../components/Button/Button";
import { getTaskById, updateTask } from "../../services/todos-sevices";
import { Navigate, useParams } from "react-router-dom";
import { useState } from "react";

const Edit = () => {
    const { register, handleSubmit, setValue } = useForm();
    const id = useParams().id;
    const [goToHome, setGoToHome] = useState(false);

    if (goToHome) return <Navigate to="/" />;

    getTaskById(id).then(resp => setValue("name", resp.name));

    /*     const getTask = async () => {
            const task = await getTaskById(id);
            setValue("name", task.name)
        }
        getTask(); */


    return goToHome ? <Navigate to="/" /> :
        <>
            <h2>Modificando Tarea</h2>
            <form onSubmit={handleSubmit(modifiedTask => updateTask(id, modifiedTask).then(() => setGoToHome(true)))}>
                <input {...register("name", { required: true })} type="text" />
                <Button type="submit">Guardar</Button>
            </form>
        </>
}

export default Edit;