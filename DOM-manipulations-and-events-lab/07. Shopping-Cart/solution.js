function solve() {
   let productTitleElements = document.getElementsByClassName('product-title');
   let productPricesElements = document.getElementsByClassName('product-line-price');

   let productNames = Array.from(productTitleElements);
   let productPrices = Array.from(productPricesElements);

   let products = {};

   while (productPrices.length > 0) {
      products[productNames.shift().textContent] = Number(productPrices.shift().textContent)
   }

   let addButtonElement = document.querySelectorAll('.add-product');
   Array.from(addButtonElement).forEach(x => x.addEventListener('click', addToCart));
   document.querySelector('.checkout').addEventListener('click', checkoutHandler);

   let bought = [];
   let textarea = document.querySelector('textarea');
   let cost = 0;
   let output = '';

   function addToCart(e) {
      let currentProduct = e.target.parentNode.parentNode.querySelector('.product-title').textContent;

      output = `Added ${currentProduct} for ${products[currentProduct].toFixed(2)} to the cart.\n`;
      cost += products[currentProduct];
      textarea.value += output;
      if (!bought.includes(currentProduct)) { 
         bought.push(currentProduct) 
      }
   } 

   function checkoutHandler() {
      output = `You bought ${bought.join(', ')} for ${cost.toFixed(2)}.`;
      textarea.value += output;
      document.querySelectorAll('button').forEach(x => x.disabled = true);
   }
}
