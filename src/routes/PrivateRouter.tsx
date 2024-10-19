import { Navigate, Outlet, Route, Routes } from "react-router"
import { DashboardPage } from "../Dashboard/pages/DashboardPage";

export const PrivateRouter = () => {

    const isAuthenticated = true;

    return (


        <>
    
            <h1>Hola</h1>

            <Outlet />

        </>



    )

}
