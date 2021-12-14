import React, { useState, useEffect } from 'react';

//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

//Componenets

// Hook
import {useHomeFetch} from './hooks/useHomeFetch';
// Image
import NoImage from '../images/no_image.jpg';

const Home = () => {
    const {state, loading, error} = useHomeFetch(); 
    return <div>HomePage</div>
}

export default Home;