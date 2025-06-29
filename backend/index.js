const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors({
  origin: 'http://localhost:3000', // or 5173 for Vite
}));

app.get('/', (req, res) => {
  res.send('Backend is working!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
