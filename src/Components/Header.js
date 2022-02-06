import React from 'react';
import styledComponents from 'styled-components';
import { DataContext } from '../context/DataContext';
import { useContext } from 'react';

function Header() {

    const {searchKey, setSearchKey, fetchMovies} = useContext(DataContext);

    const searchMovies = (e) => {
    e.preventDefault()
    fetchMovies(searchKey);
    }

    return (
        <HeaderStyled>
            <div className="header-con max-center">
                <h1>Movie TRailer App</h1>
                            
                <form onSubmit={searchMovies}>
                    <input type="text" onChange={(e) => setSearchKey(e.target.value)}/>
                    <button type='submit'>search!</button>
                </form>
            </div>
        </HeaderStyled>
    );
}

const HeaderStyled = styledComponents.header`

.header-con{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

`;

export default Header;
