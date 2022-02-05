import React from 'react';
import styledComponents from 'styled-components';


function MovieCard({movie}) {
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w500/"
    return (
    <MovieCardStyled>
        <div className='movie-card'>
        {movie.poster_path ? <img src={`${IMAGE_PATH}${movie.poster_path}`}/>
        : null
        }
        <h4>{movie.title}</h4>
        </div>
    </MovieCardStyled>
);
};

const MovieCardStyled = styledComponents.div`
img{
    width: 100%;
}
`;

export default MovieCard;
