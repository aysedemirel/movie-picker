import React, { useState, useEffect } from 'react';

//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

//Components
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Button from './Button';
// Hook
import { useHomeFetch } from '../hooks/useHomeFetch';
// Image
import NoImage from '../images/no_image.jpg';

const Home = () => {
    const { state, loading, error, setSearchTerm, searchTerm, setIsLoadingMore } = useHomeFetch();
    
    if(error)
    {
        return <div>Something went wrong....</div>;
    }
    return (
        <div>
            {!searchTerm && state.results[0] ? (
                <HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    title={state.results[0].original_title}
                    text={state.results[0].overview}
                />
            )
                : null
            }
            <SearchBar setSeacrhTerm={setSearchTerm} />
            <Grid header={searchTerm ? 'Search Results' : 'Popular Movies'}>
                {state.results.map(movie => (
                    <Thumb
                        key={movie.div}
                        clickable={true}
                        image={
                            movie.poster_path
                                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                                : NoImage
                        }
                        movieId={movie.id}
                    />
                ))}
            </Grid>
            {loading && <Spinner />}
            {state.page < state.total_pages && !loading && (
                <Button text='Load More' callback={()=>setIsLoadingMore(true)}/>
            )}
        </div>
    );
}

export default Home;