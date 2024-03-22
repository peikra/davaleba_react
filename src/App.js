
import './App.css';
import PublicRoutes from './components/Routes/PublicRoutes';
import AuthRoutes from './components/Routes/AuthRoutes';


function App() {

const isauthorized = true
  return (
    <div className="App">
      
      {
        isauthorized ? <PublicRoutes/> : <AuthRoutes/>
      }
      
      
    
    </div>
  );
}

export default App;
