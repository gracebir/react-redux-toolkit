import React from 'react'
import { useFetchTodosQuery } from '../slice/todos/todoSlice';

function Navbar() {
  const { data = []} = useFetchTodosQuery();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container-fluid d-flex justify-content-between">
          <h4 className="navbar-brand">TodoList.</h4>
          <h5 className='navbar-item'>Todos: {data.length}</h5>
        </div>
      </nav>
    )
}

export default Navbar
