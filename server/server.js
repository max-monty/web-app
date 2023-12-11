import express from 'express';
const app = express();
const port = 3001;

app.get('/api', (req, res) => res.send('Hello from Server'));

app.listen(port, () => console.log(`Server running on port ${port}`));
