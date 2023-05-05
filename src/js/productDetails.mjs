import {setLocalStorage} from './utils.mjs';
import {findProductById} from './productData.mjs';

let product = {};

const addToCart = (product) => {
  setLocalStorage("so-cart", product);
}

const addToCartHandler = async (e) => {
  const product = await findProductById(e.target.dataset.id);
  addToCart(product);
}

const renderProductDetails = () => {
  document.getElementById("productName").textContent = product.Name;
  document.getElementById("productNameWithoutBrand").textContent = product.NameWithoutBrand;
  document.getElementById("productImage").src = product.Image;
  document.getElementById("productFinalPrice").textContent = `$${product.FinalPrice}`;
  document.getElementById("productColorName").textContent = product.Colors[0].ColorName;
  document.getElementById("productDescriptionHtmlSimple").innerHTML = product.DescriptionHtmlSimple;
  document.getElementById("addToCart").dataset.id = product.Id;
}

const productDetails = async (productId) => {
  product = await findProductById(productId);
  renderProductDetails();
}

export default productDetails;

document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
