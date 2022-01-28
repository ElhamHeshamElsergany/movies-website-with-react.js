import axios from "axios";
import React, { useEffect, useState } from "react";



export default function Search(props) {

    const { handleSearch } = props;
    const [searchBox, setSearchBox] = useState();

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c196a80289a41d35b7d598c4cd6e616a&query=${searchBox}`)
            .then((res) => handleSearch(res.data.results))
            // .catch((err) => handleSearch(err));
    }, [searchBox])


    return (

        <div className="container">
            <div className="row d-flex justify-content-center">
                <div class="col-md-12 w-75 my-5 d-flex">
                    <input id="allMovies" type="text" name="allMovies" class="searchMo form-control mb-5 text-white text-center "
                        placeholder="get movies by word..." onKeyUp={(e) => { setSearchBox(e.target.value) }} />
                    <button className='btn btn-outline-danger mx-2'>Search</button>
                </div>
            </div>
        </div>
    )
}
