import React, { createContext, useState } from "react";
import axios from "axios";

export const DataContext = createContext();


export const Dataprovider = ({children}) => {

    const [searchKey, setSearchKey] = useState("");
    const [selectedMovie, setSelectedMovie] = useState({});

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

        setSelectedMovie(results[0])
        setMovies(results)
    }
// ---------------


    return(
        <DataContext.Provider value={{
            searchKey,
            setSearchKey,
            movies,
            fetchMovies,
            selectedMovie,
            setSelectedMovie,
            IMAGE_PATH
        }}>
            {children}
        </DataContext.Provider>
    )
};
