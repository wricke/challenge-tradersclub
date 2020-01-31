import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Item, { ItemPropTypes } from '../Item';

import { Separator, Wrapper } from './style';

const List = (props) => {
  const { cars } = props;

  return (
    <Wrapper>
      {
        cars.map((car) => (
          <Fragment key={car.id}>
            <Item car={car} />
            <Separator />
          </Fragment>
        ))
      }
    </Wrapper>
  );
};

export const ListPropTypes = {
  cars: PropTypes.arrayOf(ItemPropTypes.car).isRequired,
};

List.propTypes = ListPropTypes;

export default List;
