import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-gradient-to-r from-black to-gray-900 w-full h-screen p-10">
        <div className="flex justify-between">
          <h1 className="text-white text-4xl font-bold ">Hello World</h1>
          <h1 className="text-white text-4xl font-bold ">Hello World</h1>
        </div>
      </div>
    </>
  );
}

export default App;
