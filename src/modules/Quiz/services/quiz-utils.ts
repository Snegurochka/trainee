export const getRandomInt = (max: number) => Math.floor(Math.random() * max);

export const removeDuplicates = (arr: number[]) => {
  return Array.from(new Set(arr));
};