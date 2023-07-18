import { login } from './auth.mjs';

import { getParam, loadHeaderFooter } from './utils.mjs';

(async function () {
  await loadHeaderFooter();
})();

const redirect = getParam('redirect');

document.querySelector('#loginButton').addEventListener('click', (e) => {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  login({ email, password }, redirect);
});
