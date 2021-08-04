import { ITodo } from "../interface/todo.interface"
import { useDeleteTodoMutation,useEditTodoMutation } from '../slice/todos/todoSlice';


function TodoItem({_id, title, completed}:ITodo) {

    const [editTask] = useEditTodoMutation();
    const [deleteTask] = useDeleteTodoMutation();

    
    // for adding the line of todo
    const getStyle = () =>{
        return {
            textDecoration: completed ? "line-through": "none"
        }
    }

    return (
        <div style={getStyle()} className='card col-md-8'>
            <div className='card-body d-flex justify-content-between'>
                <input defaultChecked={completed} onChange={()=> editTask({_id})} type="checkbox" name="" id="" />
                <p>{title}</p>
                <button onClick={()=>deleteTask(_id)} className="btn rounded btn-danger">X</button>
            </div>
        </div>
    )
}

export default TodoItem
