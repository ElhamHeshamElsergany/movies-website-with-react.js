import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


export default function MovieDetails(props) {
    const [details, setDetails] = useState({});
    const params = useParams();
    console.log(params, 'params');
    console.log(props, 'props');




    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=c196a80289a41d35b7d598c4cd6e616a&append_to_response=videos`)
            .then((res) => setDetails(res.data))
            .catch((err) => setDetails(err));
    }, [])
    return (
        <div>
            <h1 className='text-center'>{details?.original_title}</h1>

            <div className="container my-5">
                <div className="row">
                    <div className="col-md-4">
                        <img className="w-100" src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} alt="" />
                    </div>
                    <div className="col-md-8 py-5">
                        <h3 className="text-danger text-center my-2">{details.original_title}</h3>
                        <p className="h5 my-3 text-white"> {details.overview}</p>
                        <h4 className="my-3 text-white">language : "{details.original_language}"</h4>
                        <h5 className="my-3 text-white">vote : "{details.vote_average}"</h5>
                        <h5 className="my-3 text-white"> vote times : "{details.vote_count}"</h5>
                        <br/> <br/> <br/> <br/><br/> <br/> <br/> <br/> 
                        <button className='btn btn-outline-danger p-2 mx-5'>Watch Official Trailer</button>
                    </div>
                </div>
            </div>
        </div>
    );

}

