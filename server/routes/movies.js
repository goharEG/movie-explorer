const express = require('express');
const router = express.Router();
const axios = require('axios');

require('dotenv').config();

const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

// Fetch popular movies
router.get('/popular', async (req, res) => {
    try {

        const axiosConfig = {
            method: 'get',
            url: `${TMDB_BASE_URL}/movie/popular`,
            params: {
                api_key: TMDB_API_KEY,
                language: 'en-US',
                page: 1,
            },
            headers: {
                'Accept': 'application/json'
            }
        };

        console.log('Axios config:', axiosConfig);

        const response = await axios(axiosConfig);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching popular movies:', error.message);
        res.status(500).json({ error: 'Failed to fetch popular movies' });
    }
});

// Search movies by query string
router.get('/search', async (req, res) => {
    const query = req.query.query;

    if (!query) {
        return res.status(400).json({ error: 'Query parameter is required' });
    }

    try {
        const response = await axios.get(`${TMDB_BASE_URL}/search/movie`, {
            params: {
                api_key: TMDB_API_KEY,
                language: 'en-US',
                query: query,
                page: 1,
                include_adult: false,
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error searching movies:', error.message);
        res.status(500).json({ error: 'Failed to search movies' });
    }
});

module.exports = router;