const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;


app.use(cors({
  origin: process.env.FRONTEND_URL,
}));

app.get('/', (req, res) => {
  res.send('Backend is working!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
