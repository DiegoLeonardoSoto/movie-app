import React from 'react';
import styledComponents from 'styled-components';
import MovieCard from "./MovieCard";
import { useEffect, useState,useContext } from "react";
import { DataContext } from '../context/DataContext';

function BodyContent() {

    const {movies,fetchMovies} = useContext(DataContext);

    useEffect(() => {
        fetchMovies()
    }, []);

    const renderMovies = () =>(
        movies.map(movie =>(
        <MovieCard
            key={movie.id}
            movie={movie}
        />
        ))
    )

    return (
        <BodyContentStyled>
            <div className="container">
                {renderMovies()}
            </div>
        </BodyContentStyled>
);
}

const BodyContentStyled = styledComponents.div`
.container{
    text-align: center;
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
}
`;

export default BodyContent;
