import React, { useState, useEffect, useRef } from "react";

//Images
import searchIcon from '../../images/search-icon.svg';
//Styles
import { Wrapper, Content } from './SearchBar.styles'

const SearchBar = ({ setSeacrhTerm }) => {
    const [state, setState] = useState('');
    const initial = useRef(true);

    useEffect(() => {
        if (initial.current) {
            initial.current = false;
            return;
        }
        const timer = setTimeout(() => { setSeacrhTerm(state); }, 500)

        return () => clearTimeout(timer)
    }, [setSeacrhTerm, state])

    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt="search-icon" />
                <input
                    type='text'
                    placeholder="Search movie"
                    onChange={event => setState(event.currentTarget.value)}
                    value={state}
                />
            </Content>
        </Wrapper>
    )
}

export default SearchBar;