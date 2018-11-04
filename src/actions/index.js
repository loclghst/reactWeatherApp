import axios from 'axios';
const API_KEY = 'e9824c87691ee6f2d314472abb14d812';

export const FETCH_WEATHER = 'FETCH_WEATHER';
const ROOT_URL =`https://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city){
    const url =`${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}