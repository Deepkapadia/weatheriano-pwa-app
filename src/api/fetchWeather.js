import Axios from 'axios';

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "854e30ab7b2c3511d46c32d7906bf1fb";

export const fetchWeather = async (query) => {
    const {data} = await Axios.get(URL,{
        params:{
            q:query,
            units:'metric',
            APPID: API_KEY,
        }
    });

    return data;
}
