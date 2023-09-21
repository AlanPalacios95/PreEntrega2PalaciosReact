import './card.css';
import useCount from '../../hook/useCount.jsx';
function Counter() {
  const { increment, decrement, count } = useCount(0); 

  return (
    <div className="counter__div">
      <button className="counter__suma" onClick={increment}>+</button>
      <span className="counter__number">{count}</span> 
      <button className="counter__resta" onClick={decrement}>-</button>
    </div>
  );
}

export default Counter;