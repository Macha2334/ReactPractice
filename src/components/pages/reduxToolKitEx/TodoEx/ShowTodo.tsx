import { useSelector } from "react-redux"
import { todo_T } from "../TodoSlice"
import TodoItem from "./TodoItem"
const ShowTodo=()=>{
    const todos=useSelector((state:any)=>state.todos);
    console.log('show todo')
    console.log({todos})
    return(
        <div style={{padding:"30px"}}>
            <h4>Added Items:</h4>
            {todos.map((item:todo_T)=>{
                return <TodoItem {...item}/> 
            })}
        </div>
    )
}
export default ShowTodo;