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

const checkEmail = (email) => {
  const regexExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;

  return regexExp.test(email);
};

export { imgPath, format, checkEmail };
