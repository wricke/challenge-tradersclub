import ax from 'axios';
import { toast } from 'react-toastify';

export const axios = ax.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api`,
});

axios.interceptors.response.use(
  (data) => data.data,
  Promise.reject,
);

export const checkAPI = () => axios.get().catch(() => {
  toast.error('Houve um erro ao conectar com a API do TradersClub. Por favor, tente novamente mais tarde.');
});

export const getCars = (search = '') => axios.get('/cars', { params: { search } }).catch(checkAPI);

export const getCar = (id) => getCars()
  .then(({ cars }) => (cars || []).find((car) => car.id === parseInt(id, 0)));

export const getBrands = () => axios.get('/brands').catch(checkAPI);

export const createCar = (data) => axios.post('/cars', data).catch(checkAPI);

export const removeCar = (id) => axios.delete(`/cars/${id}`).catch(checkAPI);

export const updateCar = ({ id, ...data }) => axios.put(`/cars/${id}`, data).catch(checkAPI);
