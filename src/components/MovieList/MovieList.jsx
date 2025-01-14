import PropTypes from 'prop-types';

const MovieList = ({ moviesProp }) => {
  console.log(moviesProp);
  return (
    <ul>
      {moviesProp.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
};


MovieList.propTypes = {
  moviesProp: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      director: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MovieList;
