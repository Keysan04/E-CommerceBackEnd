export const otpGenerator = (lenght = 6) => {
  let str = "";
  for (let i = 0; i < lenght; i++) {
    str += Math.floor(Math.random() * 10);
  }
  return str;
};
