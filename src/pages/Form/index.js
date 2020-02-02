import React, {
  useEffect, useState, useRef, useMemo,
} from 'react';
import { toast } from 'react-toastify';

import Form from '../../components/Car/Form';
import {
  getCar, getBrands, createCar, updateCar, removeCar,
} from '../../services/axios';

const FormPage = ({ match, history }) => {
  const { id } = useMemo(() => match.params, [match.params]);

  const [car, setCar] = useState({});
  const [brands, setBrands] = useState([]);
  const config = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  };

  const handleReset = () => () => history.push('/list');
  const handleNewCar = async (data) => {
    try {
      await createCar(data);
      toast.success('Carro criado com sucesso :)', config);
      history.push('/list');
    } catch (error) {
      console.error('error :', error);
      toast.error('Não foi possível criar o carro no momento. Por favor, tente novamente mais tarde.', config);
    }
  };
  const handleUpdateCar = async (data) => {
    try {
      await updateCar(data);
      toast.success('Carro modificado com sucesso. :)', config);
      history.push('/list');
    } catch (error) {
      console.error('error :', error);
      toast.error('Não foi possível atualizar o carro no momento. Por favor, tente novamente mais tarde.', config);
    }
  };
  const handleDelete = async () => {
    try {
      await removeCar(id);
      toast.success('Carro deletado com sucesso. :)', config);
      history.push('/list');
    } catch (error) {
      console.error('error :', error);
      toast.error('Não foi possível remover o carro no momento. Por favor, tente novamente mais tarde.', config);
    }
  };

  const container = useRef();

  useEffect(() => {
    if (!container.current) return;

    const getCarAndBrands = () => Promise.all([getCar(id), getBrands()]);
    const setCarAndBrands = ([c, { brands: b }]) => {
      if (id) {
        const { brand, ...rest } = c;
        setCar({ ...rest, brand: b.findIndex((x) => x.name === brand) });
      }
      setBrands(b);
    };
    const loadCarAndBrands = () => {
      getCarAndBrands()
        .then(setCarAndBrands);
    };

    loadCarAndBrands();
  }, [id]);

  return (
    <div ref={container}>
      {
        id && car.id
          ? (
            <Form
              key="edit"
              id={parseInt(id, 0)}
              brands={brands}
              initialValues={car}
              handleSubmit={handleUpdateCar}
              handleDelete={handleDelete}
            />
          )
          : (
            <Form
              key="new"
              brands={brands}
              handleReset={handleReset}
              handleSubmit={handleNewCar}
            />
          )
      }
    </div>
  );
};

export default FormPage;
