// frontend/src/App.js
import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
      fetch(process.env.REACT_APP_BACKEND_URL)
      .then(res => res.text())
      .then(data => setMessage(data));
  }, []);

  return <div>Hello</div>;
}

export default App;
