import AddTodo from "./addTodo"

import { useFetchTodosQuery} from '../slice/todos/todoSlice'
import TodoItem from "./TodoItem";

function Todo() {

    const { data = [], isFetching} = useFetchTodosQuery();

    return (
        <div className='d-flex align-items-center flex-column'>
            <AddTodo/>
            <br />
            {isFetching}
            
            
                {data.map((todo,i)=>(
                    <TodoItem 
                    key={i}
                    title={todo.title}
                    id={todo.id}
                    completed={todo.completed}
                    />
                ))}
            
        </div>
    )
}

export default Todo
