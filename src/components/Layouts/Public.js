import { Outlet } from "react-router-dom"
import Navigation from "../Navigation"

const PublicLayout = ()=>{
    return(
        <>
        <Navigation/>
        
        <Outlet />
        </>
    )
}

export default PublicLayout