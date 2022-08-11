export const isEqual = (first: any[], second: any[]): boolean => {
  return JSON.stringify(first) === JSON.stringify(second);
};
