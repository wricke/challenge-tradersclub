import ax from 'axios';

export const axios = ax.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api`,
});

axios.interceptors.response.use(
  (data) => data.data,
  (error) => Promise.reject(error.response.data),
);

export const getCars = (search) => axios.get('/cars', { params: { search } });

export const createCar = (data) => axios.post('/cars', data);

export const removeCar = (id) => axios.delete(`/cars/${id}`);
