import { ITodo } from "../interface/todo.interface"

function TodoItem({id, title, completed}:ITodo) {
    return (
        <div className='card col-md-8'>
            <div className='card-body d-flex justify-content-between'>
                <input type="checkbox" name="" id="" />
                <p>{title}</p>
                <button className="btn rounded btn-danger">X</button>
            </div>
        </div>
    )
}

export default TodoItem
