import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { getCars } from '../../services/axios';
import { fromApi, allCarsToOurCars } from '../../helpers/mappers';
import List from '../../components/List';

const ListPage = () => {
  const [cars, setCars] = useState([]);
  const search = useSelector((store) => store.header.search);

  useEffect(() => {
    getCars(search)
      .then(fromApi)
      .then(allCarsToOurCars)
      .then(setCars);
  }, [search]);

  return <List cars={cars} />;
};

export default ListPage;
