import React, { useState } from 'react';
import { Modal,Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { edit_todo } from '../Redux/Actions';

const EditTask = ({Task}) => {
    //Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //Edit
    const dispatch=useDispatch();
    const [editTask, setEditTask] = useState(Task.text)
    const handleEdit= ()=>{
        dispatch(edit_todo(editTask,Task.id));
        handleClose()
    }
  return (
    <div>
     <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {/* Edit */}
            <input type="text" onChange={(e)=>setEditTask(e.target.value)} value={editTask}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/*handleClose=>handleEdit */}
          <Button variant="primary" onClick={()=>handleEdit()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default EditTask