import Cookies from 'js-cookie';
import axios from 'axios';
// import { BASE_URL } from '../constants/apiUrl';
// const BASE_URL = process.env.BASE_URL;
const BASE_URL = 'https://course-api.com';

const multipartApi = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Content-Type': 'multipart/form-data',
	},
});

multipartApi.interceptors.request.use(
	function (config) {
		const wiretenAccess = Cookies.get('wiretenAccess') || 'undefined';
		if (config.headers) {
			if (wiretenAccess !== 'undefined') {
				config.headers['Authorization'] = `Bearer ${JSON.parse(wiretenAccess)}`;
			}
		}
		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

multipartApi.interceptors.response.use(
	res => res,
	async err => {
		if (err.message === 'Network Error') {
			return Promise.reject('Network Error.');
		}
		if (err.response?.status === 401) {
			if (typeof window !== 'undefined') {
				// location.replace('/account/signin/');
			}
			return Promise.reject(err);
		}
		if (err.response?.status === 404) {
			if (typeof window !== 'undefined') {
				// location.replace('/account/signin');
			}
		} else if (err.response?.status === 403) {
			location.replace('/403');
		} else if (err.response?.status === 500) {
			// location.replace('/500');
		}

		return Promise.reject(err);
	}
);

export default multipartApi;