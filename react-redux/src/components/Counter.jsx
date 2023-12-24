import { useSelector,useDispatch } from 'react-redux';
import { counterActions } from '../store/Counter'

import classes from './Counter.module.css';

const Counter = () => {
  const counter =  useSelector(state => state.counter.counter)
  const show = useSelector(state => state.counter.showCounter);
  const dispatch = useDispatch()

  const incrementHandlerby5 = ()=>{
      dispatch(counterActions.incrementBy5(5))
  }
  const decrementHandlerby5 = ()=>{
      dispatch(counterActions.decrementBy5(5))
  }
  const incrementHandler = ()=>{
      dispatch(counterActions.increment())
  }
  const decrementHandler = ()=>{
      dispatch(counterActions.decrement())
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandlerby5} >Increment by 5</button>
        <button onClick={decrementHandlerby5} >Decrement by 5</button>
        <button onClick={incrementHandler}>Increment </button>
        <button onClick={decrementHandler}>decrement </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
