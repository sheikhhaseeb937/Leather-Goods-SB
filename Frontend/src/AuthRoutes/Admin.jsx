



import {  Navigate, Outlet, useNavigate } from "react-router-dom"
import Login from "../components/authpages/Login"



const Admin = ()=>{

    const isAdmin = localStorage.getItem('role')
    console.log(isAdmin)
    return(
        isAdmin === "admin"?<Outlet/>: <Navigate to={'/'}/>
    )



}
export default Admin