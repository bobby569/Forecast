import axios from 'axios';

const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast';
const API_KEY = 'ce934e3d6cca78c63a1469a65cbf577f';
const QUERY_URL = `${ROOT_URL}?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${QUERY_URL}&q=${city},us`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}
