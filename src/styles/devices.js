import allSizes from './sizes';

const transformSizesInDevices = (sizes, measure = 'min-width') => {
  const devices = Object.keys(sizes).reduce((acc, cur) => ({
    ...acc,
    [cur]: `(${measure}: ${sizes[cur]}px)`,
  }), {});

  return devices;
};

export const minWidth = transformSizesInDevices(allSizes);

export const maxWidth = transformSizesInDevices(allSizes, 'max-width');
