import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const CurrentProduct = ()=>{
    const params = useParams()
    console.log(params.id)
    const[product,setproduct] = useState([])
    
    useEffect(()=>{
      
        axios.get(`https://dummyjson.com/products/${params.id}`)
        .then(res => {
            
          const product = res.data
          
          setproduct(product);
        })

    },[])
    return(
        <div className="for_products">
            <h1>Current product page</h1>
            {<h2>{product.title}</h2> }

        </div>
    )
}

export default CurrentProduct