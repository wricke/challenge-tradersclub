import React from 'react';
import { Link } from 'react-router-dom';

import Item, { ItemPropTypes } from '../Item';
import { Wrapper } from './styles';

const ItemList = (props) => {
  const { clickable, car } = props;

  return (
    <Wrapper>
      {
        clickable
          ? (
            <Link
              to={{
                pathname: `/car/${car.id}`,
              }}
            >
              <Item car={car} />
            </Link>
          )
          : (
            <div>
              <Item car={car} />
            </div>
          )
      }
    </Wrapper>
  );
};

ItemList.propTypes = ItemPropTypes;

export default ItemList;
