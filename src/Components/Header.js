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
            <h1>Movie TRailer App</h1>

            <form onSubmit={searchMovies}>
                <input type="text" onChange={(e) => setSearchKey(e.target.value)}/>
                <button type='submit'>search!</button>
            </form>
        </HeaderStyled>
    );
}

const HeaderStyled = styledComponents.header`

`;

export default Header;
