import { useEffect, useRef, useState } from "react";


const ToDoapp = ()=> {
  

const [list,setlist] = useState(JSON.parse(sessionStorage.getItem('list')) || [])
const [value,setvalue] = useState('')

useEffect(()=>{
    sessionStorage.setItem('list',JSON.stringify(list))

}, [list])

var new_item
const handleCheck = (e)=>{
    console.log("List:", list);
    console.log("Target ID:", e.target.id);
   
    new_item = {
        id: parseInt(e.target.id) ,
        text: e.target.name ,
        checked : e.target.checked
    }
    console.log(new_item.id)
    console.log(e.target.name)

    const new_list = list.map(item=>{
        if (item.id===parseInt(e.target.id)){
            return new_item
        }
        else{
            return item
        }
    })

    setlist(new_list)
}


const handleSubmit = (e)=>{
    e.preventDefault()
        const new_item = {
        id: list.length + 1,
        text: value,
        checked: false
    }
    value && setlist([...list,new_item])
    setvalue("")

    

}

const handleClick = (e)=>{
    
    
    
    const itemId = parseInt(e.target.id);
    const updatedList = list.filter(item => item.id !== itemId);
    setlist(updatedList);
    sessionStorage.setItem('list', JSON.stringify(updatedList));


}

const inputref = useRef()

useEffect(()=>{
    
    inputref.current.focus()

},[inputref])

    return (
        <div className="Todoapp">
            <h1 className='title'>To Do App</h1>
            <form onSubmit = {handleSubmit}>
                <div className="text">
                    
                    <input ref={inputref} type='text' value={value} onChange = {(e)=> setvalue(e.target.value)}  />
                    <button>Add to do items</button>
                
                <ul className="lists">
                    {
                        list.map((item,index)=>{
                            return(
                                <li key = {index} >
                                    
                                    <input  type='checkbox' name={item.text} id={item.id} checked={item.checked} onChange={handleCheck}/>
                                    {item.text}
                                    <button className="delete" id={item.id} onClick={handleClick}>delete</button>
                                </li>
                            )
                        })
                    }


                </ul>
                </div >

            </form>


        </div>
    )
   
}

export default ToDoapp