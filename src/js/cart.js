import { loadHeaderFooter } from './utils.mjs';
import shoppingCart from './shoppingCart.mjs';


(async function () {
  await loadHeaderFooter();
})();
shoppingCart();
