import { Outlet, useNavigate } from "react-router-dom"



const IsAuth = ()=>{
    const navigate = useNavigate()
    const Auth = !!localStorage.getItem('token')
    return(
        Auth ? <navigate to={'/'} /> : <Outlet />
    )
}
export default IsAuth