export const daysInterval = (start: number) => {
  const current = Date.now();
  return Math.floor((current - start) / (24*60*60*1000));
};

export const daysRender = (dateStart: number, lastCheckIn: number):string => {
  const daysFromLastCheckIn = daysInterval(lastCheckIn);
  if (daysFromLastCheckIn > 1)
    return `You missed ${daysFromLastCheckIn - 1} days`;
  const days = daysInterval(dateStart);
  return days > 0 ? `Challenge Days : ${days}` : "Just start";
};