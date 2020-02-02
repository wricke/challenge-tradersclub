import * as Yup from 'yup';

export default Yup.object().shape({
  title: Yup.string()
    .min(5, 'O título deve ter no mínimo 5 caracteres.')
    .max(40, 'O título deve ter no máximo 40 caracteres.')
    .required('Título é obrigatório.'),
  model: Yup.string()
    .required('Modelo é obrigatório.'),
  brand: Yup.string()
    .required('Marca é obrigatória.'),
  year: Yup.number()
    .required('Ano é obrigatório.')
    .test('len', 'O ano deve ter 4 caracteres.', (val) => String(val).length === 4),
  color: Yup.string()
    .min(2, 'A cor deve ter no mínimo 2 caracteres.')
    .max(15, 'A cor deve ter no máximo 15 caracteres.')
    .required('Cor é obrigatória.'),
  km: Yup.number()
    .required('O número de KMs rodados é obrigatório.'),
  price: Yup.number()
    .required('O preço é obrigatório.'),

});
