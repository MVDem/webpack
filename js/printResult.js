const result = document.getElementById('datacalc_result');

export const printError = (textError) => {
  result.innerText = textError;
};

export const printResult = ({ years, months, days }) => {
  result.innerText = `Год: ${years} - Месяц: ${months} - День: ${days}`;
};
