import React, { useState, useEffect, useRef } from "react";

//Images
import searchIcon from '../../images/search-icon.svg';
//Styles
import { Wrapper, Content } from './SearchBar.styles'

const SearchBar = ({ setSeacrhTerm }) => {
    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt="search-icon" />
                <input
                    type='text'
                    placeholder="Search movie"
                />
            </Content>
        </Wrapper>
    )
}

export default SearchBar;