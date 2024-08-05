export const generateId = (): number => {
  const currYear = new Date().getFullYear();
  const timestamp = Date.now();
  return parseInt(`${currYear}${timestamp}`);
};
