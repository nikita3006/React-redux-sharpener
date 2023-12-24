import { useSelector,useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  const counter =  useSelector(state => state.counter)
  const dispatch = useDispatch()

  const incrementHandlerby5 = ()=>{
      dispatch({type : "INCREMENTBY5"})
  }
  const decrementHandlerby5 = ()=>{
      dispatch({type : "DECREMENTBY5"})
  }
  const incrementHandler = ()=>{
      dispatch({type : "increment"})
  }
  const decrementHandler = ()=>{
      dispatch({type : "decrement"})
  }

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
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
