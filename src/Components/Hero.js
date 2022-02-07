import React, {useContext} from 'react';
import styledComponents from 'styled-components';
import { DataContext } from '../context/DataContext';
import YouTube from 'react-youtube';




function Hero() {

    const {selectedMovie,IMAGE_PATH, setPlayTrailer, playTrailer} = useContext(DataContext);

    const renderTrailer = () => {
        const trailer = selectedMovie.videos.results.find(vid => vid.name === "Official Trailer")
        const key = trailer ? trailer.key : selectedMovie.videos.results[0].key

        return(
            <YouTube 
                videoId={key}
                containerClassName={"youtube-container"}
                opts={
                    {
                        width: "100%",
                        height: "100%",
                        playerVars: {
                            autoplay: 1,
                            controls: 0
                        }
                    }
                }
            />
        )
    }

    return (
        <HeroStyle >
            <div className="hero" style={{backgroundImage: `url(${IMAGE_PATH}${selectedMovie.backdrop_path})`} }>
                <div className="hero-con max-center" >
                    { playTrailer ? <button className='hero-button hero-button-close' onClick={() => setPlayTrailer(false)}>Close</button> : null }

                    {selectedMovie.videos && playTrailer ? renderTrailer() : null }

                    <button className='hero-button' onClick={() => setPlayTrailer(true)}>Play Trailer</button>
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

.hero-button-close{
    position: absolute;
    z-index: 10;
    bottom: 30px;
    left: 30px;
}

.youtube-container{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom:0;
    z-index: 1;
}

`;

export default Hero;
