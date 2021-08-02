import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import Navbar from './components/Navbar';
import { incremented } from './slice/count/countSlice';
function App() {
  const count = useAppSelector((state)=> state.counter.value);
  const dispatch = useAppDispatch();
  function handleClick(){
    dispatch(incremented());
  }

  return (
    <div>
      <Navbar/>
     <h4 className='text-center'>Todo items</h4>
     <div className='container'>

       <button onClick={handleClick} className='btn btn-primary'>{count}</button>
     </div>
    </div>
  );
}

export default App;
