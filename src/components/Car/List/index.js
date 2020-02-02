import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { ItemPropTypes } from '../Item';
import ItemList from '../ItemList';

import { Separator, Wrapper } from './style';

const List = (props) => {
  const { cars, clickableItems } = props;

  return (
    <Wrapper>
      {
        cars.map((car) => (
          <Fragment key={car.id}>
            <ItemList
              car={car}
              clickable={clickableItems}
            />
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
