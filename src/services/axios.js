import ax from 'axios';

export const axios = ax.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api`,
});

export const getCars = (params) => axios.get('/cars', { params });

export const createCar = (data) => axios.post('/cars', data);

export const removeCar = (id) => axios.delete(`/cars/${id}`);
