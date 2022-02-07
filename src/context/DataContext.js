import React, { createContext, useState } from "react";
import axios from "axios";

export const DataContext = createContext();


export const Dataprovider = ({children}) => {

    const [searchKey, setSearchKey] = useState("");
    const [selectedMovie, setSelectedMovie] = useState({});
    const [playTrailer, setPlayTrailer] = useState(false);

    // se consume la data de la api
    const IMAGE_PATH ="https://image.tmdb.org/t/p/w1280";
    const API_URL = "https://api.themoviedb.org/3";
    const [movies, setMovies] = useState([]);

    const fetchMovies = async(searchKey) =>{
        const type = searchKey ? "search" : "discover"
        const {data: {results}} =  await axios.get(`${API_URL}/${type}/movie`,{
        params:{
            api_key: process.env.REACT_APP_MOVIE_API_KEY,
            query: searchKey
        }
        })

        
        setMovies(results)
        await selectMovie(results[0])
    }

    const fetchMovie = async(id) => {
        const {data} = await axios.get(`${API_URL}/movie/${id}`,{
            params:{
                api_key: process.env.REACT_APP_MOVIE_API_KEY,
                append_to_response: 'videos'
            }
            })

            return data;
    }

    const selectMovie = async (movie) =>{
        setPlayTrailer(false);
        const data = await fetchMovie(movie.id);
        setSelectedMovie(data);
    }
// ---------------


    return(
        <DataContext.Provider value={{
            searchKey,
            setSearchKey,
            movies,
            fetchMovies,
            selectedMovie,
            selectMovie,
            IMAGE_PATH,
            playTrailer,
            setPlayTrailer
        }}>
            {children}
        </DataContext.Provider>
    )
};
