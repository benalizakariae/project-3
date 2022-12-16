
import './App.css';
import MovieCard from './MovieCard';
import {useEffect, useState}from 'react';
import SearchIcon from './search.svg';
//809abd05
const API_URL='http://www.omdbapi.com?apikey=809abd05'
const movie1={
  "Title": "One Piece Film Z",
  "Year": "2012",
  "imdbID": "tt2375379",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BZTZlOTc0MmMtMDBmNy00MzU4LWE2Y2MtMWEwN2Y2YThhYzJiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
}
function App() {
  const [movies,setMovies]=useState([]);
  const [searchTerm,setSearchTerm]=useState('');
  const searchMovie= async(title)=>{
    const response =await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }
  useEffect(()=>{
    searchMovie('One piece')
  },[])
   
  return (
    
    <div className="app">
      <h1>Movies</h1>
          <div className='search'>
            <input 
               placeholder='Search for movies'
               value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
              />
              <img 
                src={SearchIcon}
                alt="search"
                onClick={()=>searchMovie(searchTerm)}
              />
             </div>

             {
              movies?.length > 0
              ?(
                <div className='container'>
                {movies.map((movie)=> (
                  <MovieCard movie={movie} />
                )
                 )}
                </div>
              ):(
                <div className='empty'>
                  <h2> No movies found</h2>
                </div>
              )

             }
          
   </div>
  );
}

export default App;
