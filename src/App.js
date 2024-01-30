import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api')
      .then(response => response.text())
      .then(msg => setMessage(msg));
  }, []);

  return <div>Server says: {message}</div>;
}

export default App;
