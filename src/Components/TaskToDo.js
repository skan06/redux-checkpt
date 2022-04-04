import React from 'react'
import { useDispatch } from 'react-redux'
import { delete_todo, done_todo } from '../Redux/Actions';
import EditTask from './EditTask';
import { Button } from 'react-bootstrap';

const TaskToDo = ({x}) => {
    const dispatch=useDispatch();
  return (
    <div className='ttd' style={{display:"flex",justifyContent:"space-around" }}>
        <div style={{marginRight:"15%"}}>
          <h2>{x.text}</h2>
          </div>
        <div style={{display:"flex",justifyContent:"space-around",width:"250px",marginTop:"10px"}}>
        <EditTask Task={x} />
        <Button onClick={()=>dispatch(done_todo(x.id))}>{x.done?"Undone":"Done"}</Button>
        <Button onClick={()=>dispatch(delete_todo(x.id))}>Delete</Button>
        </div>
    </div>
  )
}

export default TaskToDo