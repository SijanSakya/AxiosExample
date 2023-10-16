import Cookies from 'js-cookie';
import axios from 'axios';
// import { BASE_URL } from '../constants/apiUrl';
import { setupCache } from 'axios-cache-interceptor';
const BASE_URL = 'https://course-api.com';

const accountRoutes = ['register', 'login', 'set-password', 'reset-password'];

const isTokenRequired = (currentUrl: string) => {
	const tempUrl = currentUrl?.split('/')[2];
	if (accountRoutes.includes(tempUrl)) {
		return false;
	} else {
		return true;
	}
};

const jsonApi = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Content-Type': 'application/JSON',
	},
});

jsonApi.interceptors.request.use(
	function (config) {
		const wiretenAccess = Cookies.get('wiretenAccess') || 'undefined';
		if (config.headers && isTokenRequired(config.url?.toString())) {
			if (wiretenAccess !== 'undefined') {
				config.headers['Authorization'] = `Bearer ${JSON.parse(wiretenAccess)}`;
			}
			return config;
		}
		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

const isAuthRequired = () => {
	const path = 'account';
	return window?.location?.pathname?.toString()?.includes(path);
};

jsonApi.interceptors.response.use(
	res => res,
	async err => {
		if (err.message === 'Network Error') {
			return Promise.reject('Network Error.');
		}
		if (err.response?.status === 401) {
			if (typeof window !== 'undefined' && !isAuthRequired()) {
				Cookies.remove('wiretenAccess');
				Cookies.remove('wiretenRefresh');
				location.replace('/account/signin/');
			}
			return Promise.reject(err);
		}
		if (err.response?.status === 404) {
			if (typeof window !== 'undefined') {
				// location.replace('/404');
			}
		} else if (err.response?.status === 403) {
			// location.replace('/403');
		} else if (err.response?.status === 500) {
			location.replace('/500');
		} else if (err.response?.status === 502) {
			location.replace('/502');
		}
		return Promise.reject(err);
	}
);

setupCache(jsonApi);

export default jsonApi;