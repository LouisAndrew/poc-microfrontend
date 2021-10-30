import { useState } from 'react';

const actionButtonClasses = 'font-bold inline-block duration-200 mt-2 px-2 py-1 rounded bg-gray-100 hover:bg-gray-200 last:ml-2';

const Home = (): JSX.Element => {
  const [count, setCount] = useState(0);

  return (
    <div className="home">
      <h1 className="font-bold text-2xl">Hello from Container component!</h1>
      <div className="py-3">
        <h3 className="font-semibold text-xl">
          Current #count:
          {' '}
          {count}
        </h3>
        <button
          type="button"
          className={actionButtonClasses}
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          type="button"
          className={actionButtonClasses}
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Home;
