const camelCase2Snack = key => {
  const result = key.replace(/([A-Z])/g, ' $1');
  return result
    .split(' ')
    .join('_')
    .toLowerCase();
};

export default camelCase2Snack;
