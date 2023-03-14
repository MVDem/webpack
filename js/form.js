import { printError, printResult } from './printResult.js';
import getDataDiff from './getDataDiff.js';

const form = document.getElementById('datecalc');

form.onsubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  const firstdata = formData.get('firstdata');
  const seconddate = formData.get('seconddate');

  if (!firstdata || !seconddate) {
    printError('put date');
  } else {
    const dateDiff = getDataDiff(firstdata, seconddate);
    printResult(dateDiff);
  }
};
