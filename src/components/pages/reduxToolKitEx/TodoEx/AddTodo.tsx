import {useState} from "react"
import { useDispatch,useSelector } from "react-redux";
import {addTodo} from "../TodoSlice"
const AddTodo=()=>{
    const [todoText,setTodoText]=useState('');
    const todos=useSelector((state:any)=>state.todos)
    const dispatch=useDispatch();
    const handleSubmit=(e:any)=>{
        e.preventDefault();
        const temp={id:(todos?.length+1||1),text:todoText}
        dispatch(addTodo(temp));
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e)=>setTodoText(e.target.value)}/>
            <button type="submit">Add Todo</button>
        </form>
    )
}
export default AddTodo;