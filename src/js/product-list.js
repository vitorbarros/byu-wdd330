import productList from './productList.mjs';
import { getParam, loadHeaderFooter } from './utils.mjs';

(async function () {
  await loadHeaderFooter();
})();

const category = getParam('category');
productList('.product-list', category);

