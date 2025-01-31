import Layout from './components/Layout/Layout.jsx'


function App() {
  console.log('app')
  return (
    <Layout>
      
    </Layout>


  );
}


export default App;



// import { NavLink, Route, Routes } from 'react-router-dom';
// import Layout from './components/Layout/Layout.jsx'
// // import { useEffect, useState } from 'react';
// // import './App.css';
// // import MovieList from './components/MovieList/MovieList';
// // import axios from 'axios';


// function App() {

//   // const [movies, setMovies] = useState([])
//   // useEffect(() => {
//   //   fetchMovies();
//   // }, []);


//   // const fetchMovies = async () => {
//   //   try {
//   //     const options = {
//   //       method: 'GET',
//   //       url: 'https://api.themoviedb.org/3/trending/movie/day',
//   //       params: { language: 'en-US' },
//   //       headers: {
//   //         accept: 'application/json',
//   //         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWUyYTNmMTAwN2MzNGE1MmJlMzc0NzZjMjRkMWNkZiIsIm5iZiI6MTczMjQ4MjQzNy41MDIsInN1YiI6IjY3NDM5NTg1NGQ1MGNjZDdkYTQ4YmJkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9ginv8uLR5vR643vnfV1M1fS_x6n7IsJoqFXQKypknA'
//   //       },
//   //     };
//   //     const responce = await axios.request(options);
//   //     setMovies(responce.data.results);
//   //   } catch (error) {
//   //     console.error(error);
//   //   }

//   // };

//   return (
    


//     // <div>
//     //   <MovieList moviesProp={movies} />
//     // </div>
//   );
// }


// export default App;
