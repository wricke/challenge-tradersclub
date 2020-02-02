import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { OrdenedList } from './styles';
import { toCurrency } from '../../../helpers/mappers';

const Item = (props) => {
  const { car } = props;

  return (
    <Fragment>
      <div>
        <p>{car.title}</p>
        <OrdenedList>
          {car.properties.map((property) => (
            <li key={property}>
              {property}
            </li>
          ))}
        </OrdenedList>
      </div>
      <div>
        <p>{toCurrency(car.price)}</p>
        <p>{car.year}</p>
      </div>
    </Fragment>
  );
};

export const ItemPropTypes = {
  car: PropTypes.shape({
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    properties: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

Item.propTypes = ItemPropTypes;

export default Item;
