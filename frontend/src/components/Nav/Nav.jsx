import { Outlet } from "react-router-dom";


const Nav = () => {
    return (
        <>
            <nav>Esto es un NavBar</nav>
            <h1>Mi lista de tareas</h1>
            <Outlet />
        </>
    )
}

export default Nav;