import { useState } from 'react';
import { useAddTodoMutation } from '../slice/todos/todoSlice'


function AddTodo() {
    const [addTodo] = useAddTodoMutation();
    const [title, setTitle] = useState('');
   

    const saveTodo=(e:any)=>{
        e.preventDefault()
        addTodo({title});
        setTitle('');
    }
    
    return (
        <div className='col-md-6'>
            <form onSubmit={saveTodo} className='form'>
                <div className="form-group d-flex flex-column align-items-center">
                    <input value={title} onChange={(e)=> setTitle(e.target.value)} className='form-control' name='title' placeholder="Add todo..." type="text" />
                    <button type='submit' className='btn btn-secondary my-2 my-sm-0'>Add</button>
                </div>
               
            </form>
        </div>
    )
}

export default AddTodo
