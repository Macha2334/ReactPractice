import { todo_T,deleteTodo } from "../TodoSlice"
import { useDispatch } from "react-redux";
import { useState,useEffect } from "react";
import {editTodo} from "../TodoSlice"
const TodoItem=(props:todo_T)=>{
    const dispatch=useDispatch();
    const [edit,setEdit]=useState(false);
    
    const [newVal,setNewVal]=useState(props.text);
    const handleDelete=()=>{
        dispatch(deleteTodo(props))
    }
    const handleEdit=()=>{
            setEdit(true);
    }
    const handleSave=(e:any)=>{
        e.preventDefault();
        console.log('handle save')
        console.log({newVal})
        dispatch(editTodo({id:props.id,text:newVal||props.text}))
        setEdit(false);
    }
    const handlChange=(e:any)=>{
        setNewVal(e.target.value)
    }
    return(
        <div style={{display:"flex",gap:"10px"}}>
           { edit ? (
                <form  onSubmit={handleSave}>
                <input type="text" defaultValue={props.text} onChange={handlChange}/>
                <button type="submit">Save</button>
                
                </form>
            ) :(
                    <>
                    <div>{`${props.id} . ${props.text}`}</div>
                    <a onClick={handleEdit} href="#">{"Edit"}</a>
                    <a onClick={handleDelete} href="#">{"Delete"}</a>
                    </>
            )}
        </div>
    )
}
export default TodoItem;