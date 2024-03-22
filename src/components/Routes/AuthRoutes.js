import { Route,Routes } from 'react-router-dom';
import HomePage from '../../Pages/HomePage';
import NewsPage from '../../Pages/News';
import ContactPage from '../../Pages/Contact';
import PublicLayout from '../Layouts/Public';
import AuthLayout from '../Layouts/Auth';



const AuthRoutes = ()=>{
    return(
    <Routes>
        <Route path='/' element={<AuthLayout/>}>
            <Route index  element={<div>Login page</div>} />
            <Route path='register' element={<div>Registration</div>}  />
            
        </Route>

    </Routes>
    )
}

export default AuthRoutes