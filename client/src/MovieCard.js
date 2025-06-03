import React from "react";

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
            <p>Rating: {movie.vote_average}</p>
            <p>{movie.release_date}</p>
        </div>
    );
}

export default MovieCard;