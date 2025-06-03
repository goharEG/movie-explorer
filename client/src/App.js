import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

function App() {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        fetchPopularMovies();
    }, []);

    const fetchPopularMovies = async () => {
        const res = await axios.get(`/api/movies/popular`);
        setMovies(res.data.results);
    };

    const searchMovies = async () => {
        if (!query.trim()) return;
        const res = await axios.get(`/api/movies/search?query=${query}`);
        setMovies(res.data.results);
    };
    // ${process.env.REACT_APP_API_BASE_URL}
    return (
        <div>
            <h1>Movie Explorer</h1>

            <div style={{ marginBottom: "20px" }}>
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button onClick={searchMovies}>Search</button>
                <button onClick={fetchPopularMovies} style={{ marginLeft: "10px" }}>Popular</button>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default App;