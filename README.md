🎬 Movie Explorer

A web application to discover popular movies, search by title, and manage personal notes. This project demonstrates integration with the TMDB API, full-stack development using React (frontend) and Express.js (backend), and basic state management.

📦 Setup Instructions

Clone the repository

    git clone https://github.com/your-username/movie-explorer.git
    cd movie-explorer

Backend setup

    cd server
    npm install
    touch .env

Add your TMDB API key in .env:         

    TMDB_API_KEY=your_actual_api_key_here

Then start the server:      

    node index.js

Frontend setup

    cd ../client
    npm install
    npm start

Visit http://localhost:3000 in your browser 

---

✅ Features Implemented

- 🔍 Discover and display popular movies from TMDB  
- 🔎 Search for movies by title  
- 📝 Add and view personal notes per movie (stored in-memory for now)  
- 🔗 Backend and frontend communication via /api/movies and /api/notes  
- 🌐 TMDB API integration using axios  

---

🧠 Technical Decisions

- React with functional components and hooks for clean state management  
- Express.js server handles API proxying and local note storage  
- Axios for all HTTP requests (client ↔️ server ↔️ TMDB)  
- In-memory store (notesStore) used for demo purposes, easy to replace with DB  
- .env file for storing sensitive API keys (not committed)  

---

🚀 Future Improvements

- ⏳ Replace in-memory notes with persistent storage (e.g. MongoDB or SQLite)  
- 👤 Add basic user authentication to separate notes per user  
- 🎨 Improve UI/UX with styled-components or Tailwind CSS  
- 🔄 Add pagination and loading indicators  
- ✅ Add unit/integration tests with Jest and React Testing Library  
- ⚠️ Better error handling and fallback UIs  

---

⚠️ Important

Before submitting:

- ✅ REMOVE your TMDB API key from .env and code  
- ✅ Add .env to your .gitignore if not done yet  

---

## 📁 Directory Structure
<pre>

movie-explorer/
├── client/               # React frontend
│   └── src/
│       ├── App.js
│       ├── MovieCard.js
│       └── components/
│           └── Notes.js
├── server/               # Express backend
│   ├── index.js
│   └── routes/
│       ├── movies.js
│       └── notes.js

</pre>
