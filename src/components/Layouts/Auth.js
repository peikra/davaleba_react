import { Outlet } from "react-router-dom"
import Navigation from "../Navigation"

const AuthLayout = ()=>{
    return(
        <>
        
        <h1>welcome to our page</h1>
        <Outlet />
        </>
    )
}

export default AuthLayout