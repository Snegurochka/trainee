export const daysInterval = (start: number) => {
  const current = Date.now();
  return Math.floor((current - start) / (24*60*60*1000));
};
