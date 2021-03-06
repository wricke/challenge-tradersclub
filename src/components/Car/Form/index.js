import React, { Fragment, useMemo } from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';

import { Select, MenuItem } from '@material-ui/core';
import { Wrapper, Field } from './styles';
import { Input, Select as MySelect, Button } from '../../Form';
import CarSchema from '../../../schemas/car';
import colors from '../../../styles/colors';

const Form = ({
  initialValues, handleSubmit, handleReset, brands, id, handleDelete,
}) => {
  const formik = {
    initialValues,
    onSubmit: handleSubmit,
    onReset: handleReset(),
    validationSchema: CarSchema,
  };

  if (!formik.onReset) delete formik.onReset;

  return (
    <Wrapper>
      <Formik {...formik}>
        {({
          handleBlur, handleChange, values, errors, touched, resetForm, isSubmitting, submitForm,
        }) => {
          // eslint-disable-next-line
          const itemsTouched = useMemo(() => Object.keys(touched), [touched]);
          const includeField = (fieldName) => itemsTouched.includes(fieldName);

          return (
            <Fragment>
              <div className="container">
                <Field
                  component={Input}
                  placeholder="Título"
                  name="title"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                  error={includeField('title') ? errors.title : null}
                  touched={includeField('title')}
                />
              </div>
              <div className="container">
                <Field
                  component={Input}
                  placeholder="Modelo"
                  name="model"
                  type="text"
                  width="45%"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.model}
                  error={includeField('model') ? errors.model : null}
                  touched={includeField('model')}
                />
                <Field
                  component={Input}
                  placeholder="Ano"
                  name="year"
                  type="number"
                  width="45%"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.year || ''}
                  error={includeField('year') ? errors.year : null}
                  touched={includeField('year')}
                />
              </div>
              <div className="container">
                <Field
                  component={Select}
                  label="Marca"
                  input={<MySelect />}
                  name="brand"
                  width="100%"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.brand || ''}
                  error={includeField('brand') ? errors.brand : null}
                  touched={includeField('brand')}
                  displayEmpty
                  style={values.brand === 0 ? { color: colors.input } : { color: 'white' }}
                >
                  <MenuItem
                    disabled
                    value=""
                  >
                    Marca
                  </MenuItem>
                  {
                    brands.map((brand) => (
                      <MenuItem
                        key={brand.id}
                        value={brand.id}
                      >
                        {brand.name}
                      </MenuItem>
                    ))
                  }
                </Field>
              </div>
              <div className="container">
                <Field
                  component={Input}
                  placeholder="Cor"
                  name="color"
                  type="text"
                  width="45%"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.color}
                  error={includeField('color') ? errors.color : null}
                  touched={includeField('color')}
                />
                <Field
                  component={Input}
                  placeholder="Preço"
                  name="price"
                  type="number"
                  width="45%"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.price || ''}
                  error={includeField('price') ? errors.price : null}
                  touched={includeField('price')}
                />
              </div>
              <div className="container">
                <Field
                  component={Input}
                  placeholder="KMs"
                  name="km"
                  type="number"
                  width="45%"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.km || ''}
                  error={includeField('km') ? errors.km : null}
                  touched={includeField('km')}
                />
              </div>
              <div className="container">
                <div className="half">
                  {id ? (
                    <Button
                      width="80px"
                      outline
                      onClick={(e) => {
                        e.preventDefault();
                        handleDelete();
                      }}
                    >
                      Remover
                    </Button>
                  ) : null}
                  <Button
                    width="80px"
                    outline
                    type="reset"
                    onClick={() => resetForm(initialValues)}
                  >
                    Cancelar
                  </Button>
                </div>
                <div className="justify-end">
                  <Button
                    bgColor="white"
                    color={colors.background}
                    width="80px"
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      submitForm();
                    }}
                    disable={isSubmitting}
                  >
                    Salvar
                  </Button>
                </div>
              </div>
            </Fragment>
          );
        }}
      </Formik>
    </Wrapper>
  );
};

const allowNull = (wrappedPropTypes) => (props, propName, ...rest) => {
  if (props[propName] === null) return null;
  return wrappedPropTypes(props, propName, ...rest);
};

export const FormPropTypes = {
  handleReset: PropTypes.func,
  initialValues: PropTypes.shape({
    title: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    brand: allowNull(PropTypes.number.isRequired),
    year: allowNull(PropTypes.number.isRequired),
    color: PropTypes.string.isRequired,
    km: allowNull(PropTypes.number.isRequired),
    price: allowNull(PropTypes.number.isRequired),
  }),
  id: PropTypes.number,
  handleDelete: PropTypes.func,
};

export const FormDefaultProps = {
  initialValues: {
    title: '',
    model: '',
    brand: 0,
    year: null,
    color: '',
    km: null,
    price: null,
  },
  id: 0,
  handleReset: () => null,
  handleDelete: () => null,
};

Form.propTypes = FormPropTypes;

Form.defaultProps = FormDefaultProps;

export default Form;
