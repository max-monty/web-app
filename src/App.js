import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api')
      .then(response => response.text())
      .then(message => setMessage(message));
  }, []);

  return (
    <div>
      <h1>React App</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;