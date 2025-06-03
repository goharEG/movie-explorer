require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();


const moviesRouter = require('./routes/movies');
app.use(cors());
app.use(express.json());
app.use('/api/movies', moviesRouter);

const notesRoutes = require('./routes/notes');
app.use('/api/notes', notesRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});