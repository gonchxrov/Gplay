const imgPath = "http://localhost:4000";

const format = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
    return `${day}/${month}/${year}`;
  }

  return ``;
};

export { imgPath, format };
