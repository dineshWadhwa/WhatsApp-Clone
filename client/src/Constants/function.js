export const getObjectLength = (_) => {
  try {
    return Object.keys(_).length;
  } catch (error) {
    return 0;
  }
};
