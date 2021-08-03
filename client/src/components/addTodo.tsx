function AddTodo() {
    return (
        <div className='col-md-6'>
            <form className='form'>
                <div className="form-group d-flex ">
                    <input className='form-control' placeholder="Add todo..." type="text" />
                    <button className='btn btn-success'>Add</button>
                </div>
               
            </form>
        </div>
    )
}

export default AddTodo
