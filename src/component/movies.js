import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Movies() {
  const [MoviesList, setMoviesList] = useState([]);
  const [count, setCount] = useState(1);


  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=c196a80289a41d35b7d598c4cd6e616a&language=en-US&page=${count}`)
      .then(res => setMoviesList(res.data.results))
      .catch((err) => console.log(err));
    console.log(count, "count");
  }, [count])

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-md-12">
          <div className="brdr my-5 w-50"></div>
          <h2 className=" text-white ">
            Trending Movies To Watch Right Now
          </h2>
          <h3 className="h4 text-muted">
            trending movies to watch right now
          </h3>
          <div className="brdr my-5 w-25"></div>
        </div>
        <div className='moviees position-relative'>
          {MoviesList.map((movie, index) => {
            return <div className="movie my-2 position-relative col-md-4 col-sm-12">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-75 mx-2" />
              <div>
                <Link to={`/details/${movie.id}`}><h2 className="h5 mt-2 text-white">{movie.title}</h2></Link>
              </div>
              <div class="vote p-1 position-absolute start-0 top-0">
                {movie.vote_average}
              </div>
            </div>
          })}
        </div>
      </div>
      <div className='d-flex justify-content-center'>
        <button className='btn btn-danger mx-5' disabled={count === 1} onClick={() => {
          setCount(count - 1);
        }} >Previous</button>
        <button onClick={() => {
          setCount(count + 1);
        }} className='btn btn-info' >Next</button>
      </div>
    </div>

  );
}
export default Movies;