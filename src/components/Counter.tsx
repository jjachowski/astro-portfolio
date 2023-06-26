import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h4 className='text-blue-800 font-bold'>hi Im react component</h4>
      <h5 className='text-blue-600 font-bold'>my count is: {count}</h5>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className='rounded-md bg-blue-300 p-2 shadow-md hover:bg-blue-400'
      >
        click me! +1
      </button>
    </div>
  );
}
