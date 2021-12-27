import { useSelector, useDispatch } from "react-redux";
import { counterAction } from '../store/counter';
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterAction.increment());
  };
  const increaseHandler = () => {
    dispatch(counterAction.increase(10)); 
    //{type: SOME_UNIQUE_IDENTIFIER, payload: 10}
  };
  const decrementHandler = () => {
    dispatch(counterAction.decrement());
  };
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increament</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decreament</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

{/* 
Without redux-toolkit or simple redux

import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);

  const incrementHandler = () => {
      dispatch ({ type: 'increment'})
    };
  const increaseHandler = () => {
      dispatch ({ type: 'increase', amount: 10 })
    };
  const decrementHandler = () => {
      dispatch({type: 'decrement'});
  };
  const toggleCounterHandler = () => {
    dispatch({type: 'toggle'});
  };

  return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
        <div>
          <button onClick={incrementHandler}>Increament</button>
          <button onClick={increaseHandler}>Increase by 10</button>
          <button onClick={decrementHandler}>Decreament</button>
        </div>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </main>
  );
};

export default Counter;


Class basesd component  in redux

import { Component } from 'react';   //for class basesd
import { connect } from 'react-redux'; //for class basesd

class Counter extends Component {
  incrementHandler() {
    this.props.increment();
  }
  decrementHandler() {
    this.props.decrement();
  }
  toggleCounterHandler() {}
  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increament</button>
          <button onClick={this.decrementHandler.bind(this)}>Decreament</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({type: 'increment'}),
    decrement: () => dispatch({type: 'decrement'})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
*/}
