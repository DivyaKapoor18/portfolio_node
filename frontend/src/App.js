// frontend/src/App.js
import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('https://portfolio-node-backend-kkm2.onrender.com/')
      .then(res => res.text())
      .then(data => setMessage(data));
  }, []);

  return <div>Hello</div>;
}

export default App;
