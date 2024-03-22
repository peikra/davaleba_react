import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const NewsPage = ()=>{

    const navigate = useNavigate()

    const[products,setproducts] = useState([])
    
    useEffect(()=>{
        // fetch("https://dummyjson.com/products")
        // .then((res)=>res.json())
        // .then((data)=>{
        //     setproducts(data.products);
            
        // })
        axios.get(`https://dummyjson.com/products`)
        .then(res => {
          const products = res.data.products;
          setproducts(products);
        })

    },[])

    

    return(
        <div className="page">
            <h1>News Page</h1>

            <ul>
                {
                    products?.map((product)=> <li key={product.id}><button className="button" onClick={(e)=> navigate(`${product.title}/${product.id}`)}>{product.title}</button></li>)
                }


            </ul>
        </div>
    )
}

export default NewsPage