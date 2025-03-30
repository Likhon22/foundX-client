const dateToIso = (date) => {
  const isoDate = new Date(
    `${date.month}-${date.day}-${date.year}`
  ).toISOString();
  return isoDate;
};

export default dateToIso;