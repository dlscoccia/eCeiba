export const addDays = (dateToAdd: string, days: number) => {
  const newDate = new Date(dateToAdd);
  newDate.setDate(newDate.getDate() + days);
  return newDate.toISOString().split('T')[0];
};
