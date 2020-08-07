/**
 * Special axios instance with token passed
 * @author victor
 * @date 11.12.2019
 * @project: auth-buddy
 */

import axios from 'axios';
import store from './../store/index';

const authInstance = axios.create({
	baseURL: '/gateway-service/'
});

authInstance.interceptors.request.use(config => {
	config.headers.common['Authorization'] = 'Bearer ' + store.getters['getUserToken'];
	store.commit('setIsLoading',true);

	return config;
});

export default authInstance;
