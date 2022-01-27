import axios from 'axios'
import React, { useEffect, useState } from 'react';
function Series() {
    const [SeriesList, setSeriesList] = useState([]);
    const [count, setCount] = useState(1);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=c196a80289a41d35b7d598c4cd6e616a&language=en-US&page=${count}`)
            .then(res => setSeriesList(res.data.results))
            .catch((err) => console.log(err));
    }, [count])

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-12">
                    <div className="brdr my-5 w-50"></div>
                    <h3 className=" text-white ">
                        Trending Series <br /> To Watch Right Now
                    </h3>
                    <h3 className="h4 text-muted">
                        trending Series to watch right now
                    </h3>
                    <div className="brdr my-5 w-25"></div>
                </div>
                <div className='moviees position-relative'>
                    {SeriesList.map((Series, index) => {
                        return <div className="movie my-2 position-relative col-md-4 col-sm-12">
                            <img src={`https://image.tmdb.org/t/p/w500${Series.poster_path}`} alt={Series.title} className="w-75 mx-2" />
                            <h2 className="h5 mt-2 my-2 text-white">{Series.name}</h2>
                            <div class="vote p-1 position-absolute strat-0 top-0">
                                {Series.vote_average}
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
export default Series;