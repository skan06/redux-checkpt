import { ADD, DELETE_TODO, DONE, EDIT } from "../ActionsTypes";


const initialState={Task:
                        [{text:"Practice Sports",id:Math.random(),done:false},
                        {text:"Eating",id:Math.random(),done:false} ,
                        {text:"Play video games",id:Math.random(),done:false}],
};

export const ReducerToDo=(state=initialState,action)=>{
    let {type,payload}=action;
    switch (type) {
        case ADD:
            return {...state,Task:[...state.Task,payload]};
        
        case DELETE_TODO:
            return {...state,Task:state.Task.filter((el)=>el.id!==payload)}
        
        case DONE:
            return{...state,Task:state.Task.map((el)=>el.id==payload?{...el,done:!el.done}:el)}  
        
        case EDIT:
            return{...state,Task:state.Task.map((el)=>el.id==payload.id ? {...el,text:payload.item}:el)}
        
        default:
            return state;
    }
}