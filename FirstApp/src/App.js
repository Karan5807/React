import React from "react";
import { useState,useEffect } from "react";
import './App.css';
import MovieCard from "./MovieCard";
/* http://www.omdbapi.com/?i=tt3896198&apikey=f8cbc7e5 */

const ApiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=f8cbc7e5';

const movie1 = {
    "Title": "Italian Spiderman",
    "Year": "2007",
    "imdbID": "tt2705436",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
}


const App = () =>{
const [movies, setMovies] = useState([]); 

const [SearchTerm, setSearchTerm] = useState([]);
const SearchMovie = async (title) =>{
const Response =await fetch(`${ApiUrl}&s=${title}`);
const Data = await Response.json();

setMovies(Data.Search);
}

useEffect(()=>{
    SearchMovie('Fast&Furious');
},[]);

return(

    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
        placeholder="Search for Movies"
        value={SearchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        /> 

        <img 
        src=""
        alt="Search"
        onClick={() => SearchMovie(SearchTerm)}
        >
        </img>
      </div>

      {movies?.length>0
        ? (
        <div className="Container">
           {movies.map((movie) => (
            <MovieCard movie ={movie}/>
           ))}
       </div>
         ):
         (
          <div className="Empty">
            <h4>No Movies Found</h4>
          </div>
         )}
    </div>

  );
}

export default App;