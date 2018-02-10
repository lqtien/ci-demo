import { calculate } from './calculator';

document.querySelector('#btn-eval').addEventListener('click', function () {
  const expression = document.querySelector('#expression').value
  document.querySelector('#result').value = calculate(expression);
});

