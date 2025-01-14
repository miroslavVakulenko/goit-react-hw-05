import { useEffect, useState } from 'react';
import './App.css';
import MovieList from './components/MovieList/MovieList';


function App() {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    fetchMovies();
  }, []);

  
  
  const fetchMovies = () =>{
    setMovies([
      { id: 1, title: 'The Godfather', director: 'Francis Ford Coppola' },
      { id: 2, title: 'Star Wars', director: 'George Lucas' },
      { id: 3, title: 'The Shawshank Redemption', director: 'Frank Darabont' },
    ]);
  };

  
  return(
    <div>
      <MovieList moviesProp={movies} />
    </div>
     )
}

export default App;
