import { Outlet } from "react-router-dom"
import Signup from "../components/authpages/Signup"



const PageAccess = ()=>{
    const isAuth = !!localStorage.getItem('token')
    return(
        isAuth ? <Outlet/> : <Signup/>
    )
}
export default PageAccess