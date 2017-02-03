import axios from 'axios';

// API KEY
const API_KEY = 'e7cea880e3c6b9cdfa7ac0b25f48b841';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	console.log('Request: ', request)

	return {
		type: FETCH_WEATHER,
		payload: request
	}
}