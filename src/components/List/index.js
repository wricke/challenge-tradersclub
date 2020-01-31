import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '../../layouts/Default/styles';
import Item, { ItemPropTypes } from '../Item';

import { Separator } from './style';

const List = (props) => {
  const { cars } = props;

  return (
    cars.map((car) => (
      <Container key={car.id}>
        <Item car={car} />
        <Separator />
      </Container>
    ))
  );
};

export const ListPropTypes = {
  cars: PropTypes.arrayOf(ItemPropTypes.car).isRequired,
};

List.propTypes = ListPropTypes;

export default List;
