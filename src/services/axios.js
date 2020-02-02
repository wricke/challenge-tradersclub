import ax from 'axios';

export const axios = ax.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api`,
});

axios.interceptors.response.use(
  (data) => data.data,
  Promise.reject,
);

export const getCars = (search = '') => axios.get('/cars', { params: { search } });

export const getCar = (id) => getCars()
  .then(({ cars }) => cars.find((car) => car.id === parseInt(id, 0)));

export const getBrands = () => axios.get('/brands');

export const createCar = (data) => axios.post('/cars', data);

export const removeCar = (id) => axios.delete(`/cars/${id}`);

export const updateCar = ({ id, ...data }) => axios.put(`/cars/${id}`, data);
