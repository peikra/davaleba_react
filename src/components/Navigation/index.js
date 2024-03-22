import { NavLink } from "react-router-dom"
import "./nav.css"

const Navigation = ()=>{
    const navigation = [{
        path : "/",
        name : "Home"
      },
      {
        path : "/news",
        name : "News"
      },
      {
        path : "/contact",
        name : "Contact"
      },
      ]
    return(
        <header className="App-header">
        
        
        <nav>
          <ul className="for_items">
            {navigation?.map((item,i) =>(
              <li key={i} >
                <NavLink to={item.path} className="navitem">{item.name}</NavLink>
                
              
              </li>
            ))}
            
           
          </ul>
        </nav>
  
      </header>
    )
}

export default Navigation