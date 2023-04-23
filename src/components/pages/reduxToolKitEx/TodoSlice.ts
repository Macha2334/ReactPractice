import {createSlice} from "@reduxjs/toolkit"

export type todo_T={
    id:number,
    text:string
}
const initialState:todo_T[]=[];
const todoSlice=createSlice(
    {
        name:"todos",
        initialState:initialState,
        reducers:{
            addTodo(state,action){
                return [...state,action.payload]
            },
            deleteTodo(state,action){
                return state.filter((item)=>item.id!==action.payload.id)
            },
            editTodo(state,action){
                const todo=state.find((item)=>item.id===action.payload.id)
                if(todo)todo.text=action.payload.text;
                return state;
            }
        }
    }
)
export const {addTodo,deleteTodo,editTodo} = todoSlice.actions; 
export default todoSlice.reducer;