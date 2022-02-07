import React from 'react';
import styledComponents from 'styled-components';
import MovieCard from "./MovieCard";
import { useEffect,useContext } from "react";
import { DataContext } from '../context/DataContext';
import Hero from './Hero';

function BodyContent() {

    const {movies,fetchMovies,selectMovie} = useContext(DataContext);

    useEffect(() => {
        fetchMovies()
    }, []);

    const renderMovies = () =>(
        movies.map(movie =>(
        <MovieCard
            key={movie.id}
            movie={movie}
            selectMovie={selectMovie}
        />
        ))
    )

    return (
        <BodyContentStyled>
            <Hero/>
            <div className="container max-center">
                {renderMovies()}
            </div>
        </BodyContentStyled>
);
}

const BodyContentStyled = styledComponents.div`

.container{
    padding: 1.5rem;
    text-align: center;
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    padding: 15px;
    background-color: #0F1014;
}
`;

export default BodyContent;
