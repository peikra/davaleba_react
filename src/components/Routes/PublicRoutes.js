import { Route,Routes } from 'react-router-dom';
import HomePage from '../../Pages/HomePage';
import NewsPage from '../../Pages/News';
import ContactPage from '../../Pages/Contact';
import PublicLayout from '../Layouts/Public';
import CurrentProduct from '../../Pages/News/CurrentProduct'




const PublicRoutes = ()=>{
    return(
    <Routes>
        <Route path='/' element={<PublicLayout/>}>
            <Route index  element={<HomePage/>} />
            <Route path='news' element={<NewsPage/>}  />
            <Route path='news/:id' element={<CurrentProduct/>}  />
            <Route path='news/:title/:id' element={<CurrentProduct/>}  />
            <Route path='contact' element={<ContactPage/>}  />
        </Route>

    </Routes>
    )
}

export default PublicRoutes