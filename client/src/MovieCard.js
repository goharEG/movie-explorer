import React from "react";
import Notes from './components/Notes';
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w300";

function MovieCard({ movie }) {
    return (
        <div style={{ width: "200px", border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}>
            {movie.poster_path ? (
                <img
                    src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                    alt={movie.title}
                    style={{ width: "100%", borderRadius: "4px" }}
                />
            ) : (
                <div style={{ height: "300px", background: "#eee", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span>No Image</span>
                </div>
            )}
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <p>Rating: {movie.vote_average}</p>
            <p>{movie.release_date}</p>
            <Notes movieId={movie.id} />
        </div>
    );
}

export default MovieCard;