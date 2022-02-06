import React, {useContext} from 'react';
import styledComponents from 'styled-components';
import { DataContext } from '../context/DataContext';

function Hero() {

    const {selectedMovie,IMAGE_PATH} = useContext(DataContext);

    return (
        <HeroStyle >
            <div className="hero" style={{backgroundImage: `url(${IMAGE_PATH}${selectedMovie.backdrop_path})`} }>
                <div className="hero-con max-center" >
                    <button className='hero-button'>Play Trailer</button>

                        <h1 className='hero-title'>{selectedMovie.title}</h1> <br/>
                    
                        {selectedMovie.overview ? <p className='hero-overview'>{selectedMovie.overview}</p> : null}
                        </div>

            </div>
        </HeroStyle>
    );
}

const HeroStyle = styledComponents.div`
.hero{
    min-height: 500px;
    background-position: top center;
    background-size: cover;
    display: flex;
    align-items: flex-end;
    position: relative;
}

.hero-con{
    max-width: 70%;
    padding-bottom: 2rem;

    :before {
        content:'';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0,0,0,0.35);
    }

    .hero-title {
        font-size: 5rem;
        color: #fff;
        position: relative
    }

    .hero-overview{
        font-size: 1.2rem;
        color: #fff;
        padding-bottom: 1rem;
        position: relative
    }
}

.hero-button{
    background-color: #0F1014;
    color: #FFF;
    border: 1px solid white;
    outline: none;
    cursor: pointer;
    position: relative;
    padding: 10px 15px;
    font-size: 1.3rem; 
    margin-bottom: 2rem;
}


`;

export default Hero;
