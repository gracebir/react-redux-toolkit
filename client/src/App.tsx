import './App.css';

//import { useAppDispatch, useAppSelector } from './app/hooks';
import Navbar from './components/Navbar';
import Todo from './components/Todo';
//import { incremented } from './slice/count/countSlice';



function App() {
  // const count = useAppSelector((state)=> state.counter.value);
  // const dispatch = useAppDispatch();

  return (
    <div>
      <Navbar/>
     <h4 className='text-center'>Items</h4>
     <div className='container'>
       <Todo/>
     </div>
    </div>
  );
}

export default App;
