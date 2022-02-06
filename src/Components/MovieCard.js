import React from 'react';
import styledComponents from 'styled-components';


function MovieCard({movie, selectMovie}) {
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w500/"
    return (
    <MovieCardStyled>
        <div className='movie-card' onClick={() => selectMovie(movie)}>
        {movie.poster_path ? <img src={`${IMAGE_PATH}${movie.poster_path}`}/>
        : 
        <div className="movie-placeholder">No image found</div>
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

.movie-placeholder{
    min-height: 468px;
    background-color: white;
    color: #0F1014;
    display: flex;
    justify-content: center;
    align-items: center;
}
`;

export default MovieCard;
