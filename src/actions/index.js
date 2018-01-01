import axios from 'axios';
import { WEATHER_KEY } from '../config/keys';
import { FETCH_WEATHER } from './types';

const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast';

export function fetchWeather(city) {
	const request = axios.get(`${ROOT_URL}?appid=${WEATHER_KEY}&q=${city},us`);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}
