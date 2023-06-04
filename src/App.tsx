import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import useContext from './App';

function App() {
  const [count, setCount] = useState(0);

  const { pushMsg } = useContext();

  return (
    <>
      <div className='top'>
        <span>dsd</span>
        <img
          src='https://wisecloud3-oss-dev.oss-cn-beijing.aliyuncs.com/markdown/wisecloud_logo_u&d_s.png'
          className='logo'
          alt='Vite logo'
        />
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => pushMsg('hello world')}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
