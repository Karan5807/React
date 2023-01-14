import React  from "react";

function MovieCard({movie}){
    return(
    <div className="Movie">

        <div>
        <p>{movie.Year}</p>
        </div>

        <div className="Poster">
        <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.Title} width="150"/>
        </div>
           
        <span>{movie.Type}</span> 
        <h3>{movie.Title}</h3>

        </div>
    )
}

export default MovieCard;