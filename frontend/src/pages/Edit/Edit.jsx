import { useForm } from "react-hook-form";
import Button from "../../components/Button/Button";
import { getTaskById, updateTask } from "../../services/todos-sevices";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const Edit = () => {
    const { register, handleSubmit, setValue } = useForm();
    const [task, setTask] = useState();
    const id = useParams().id;
    const navigate = useNavigate();

    getTaskById(id).then(resp => {setValue("name", resp.name); setTask(resp.name)});

    return task ? (
        <>
            <h2>Modificando Tarea</h2>
            <form onSubmit={handleSubmit(modifiedTask => updateTask(id, modifiedTask).then((result) => result && navigate("/")))}>
                <input {...register("name", { required: true })} type="text" />
                <Button type="submit">Guardar</Button>
            </form>
        </>
    ) : <h2>Tarea inexistente</h2>
}

export default Edit;