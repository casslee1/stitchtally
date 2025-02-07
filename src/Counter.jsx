import { useState } from 'react';

function Counter() {
    
    const [count, setCount] = useState(0);
        
    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };
    
    const decrement = () => {
        if(count > 0 ){
            setCount(prevCount => prevCount - 1);
        }
    };

    return (
      <div>
        <div>
            <h1>Counter: {count}</h1>
        </div>
        <div>
            <button onClick={increment} style={{ margin: '5px', padding: '10px' }}>Increase</button>
            <button onClick={decrement} style={{ margin: '5px', padding: '10px' }}>Decrease</button>
        </div>
      </div>
    );
  }
  
  export default Counter;