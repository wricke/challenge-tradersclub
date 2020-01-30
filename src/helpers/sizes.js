import sizes from '../styles/sizes';

const generateValidators = (fn) => Object.keys(sizes)
  .reduce((acc, cur) => ({
    ...acc,
    [cur]: () => fn(cur),
  }));

export const greaterThan = generateValidators((key) => window.innerWidth > sizes[key]);

export const lowerThan = generateValidators((key) => window.innerWidth < sizes[key]);
