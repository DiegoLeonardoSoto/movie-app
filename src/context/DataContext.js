import React, { createContext, useState } from "react";
import axios from "axios";

export const DataContext = createContext();


export const Dataprovider = ({children}) => {

    const [searchKey, setSearchKey] = useState("");

    // se consume la data de la api
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
    }
// ---------------

    return(
        <DataContext.Provider value={{
            searchKey,
            setSearchKey,
            movies,
            fetchMovies
        }}>
            {children}
        </DataContext.Provider>
    )
};
