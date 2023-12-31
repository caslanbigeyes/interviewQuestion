// import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

import React, { useState, useEffect } from 'react';
import useLatest from './useLatest';

const App = () => {
  const [count, setCount] = useState(0);

  // const latestCountRef = useLatest(count);


  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count+ 1);
      console.log('打印')
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p>count: {count}</p>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
