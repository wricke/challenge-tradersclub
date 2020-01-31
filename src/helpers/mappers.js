export const toOurCar = (car) => {
  const formatter = (key, value) => {
    const needFormatation = {
      km: (v) => String(v).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1.').concat(' KM'),
    };

    return (needFormatation[key] && needFormatation[key](value)) || value;
  };
  const properties = ['model', 'brand', 'km'];

  return Object.entries(car)
    .reduce(
      (acc, [key, value]) => {
        if (properties.includes(key)) {
          const currentProperties = acc.properties.concat(
            properties.includes(key) && formatter(key, value),
          );
          const current = {
            properties: currentProperties.filter((x) => x),
          };

          return {
            ...acc,
            ...current,
          };
        }

        return {
          ...acc,
          [key]: formatter(key, value),
        };
      },
      { properties: [] },
    );
};

export const allCarsToOurCars = (cars) => cars.map(toOurCar);

export const fromApi = (data) => data.cars;

export const toCurrency = (number = 0, code = 'BLR') => {
  const { format } = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: code,
  });

  return format(number).replace(/BLR/, 'R$');
};
