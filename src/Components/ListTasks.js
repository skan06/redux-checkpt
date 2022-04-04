import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import TaskToDo from './TaskToDo'
import { Button } from 'react-bootstrap'

const ListTasks = () => {
    const list=useSelector((state)=>state.ReducerToDo.Task);
    const [status, setStatus] = useState("All")
  return (
    <div style={{justifyContent:"space-around" ,margin:"5%"}}>
        <div style={{display:"flex",justifyContent:"space-evenly" ,width:"250px",marginLeft:"45%"}}>
            <Button onClick={()=>setStatus("All")}>All</Button>
            <Button onClick={()=>setStatus("Done")}>Done</Button>
            <Button onClick={()=>setStatus("Undone")}>Undone</Button>
        </div>
        {status==="All"?list.map((el)=><TaskToDo x={el}/>)
        :status==="Done"?list.filter((el)=>el.done).map((el)=><TaskToDo x={el}/>)
        :list.filter((el)=>!el.done).map((el)=><TaskToDo x={el}/>)
    }
    </div>
  )
}

export default ListTasks