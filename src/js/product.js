import { getParam } from "./utils.mjs";
import productDetails from "./productDetails.mjs";

const productId = getParam("product");

(async () => {
  await productDetails(productId);
})();

