function solve() {
   //TODO...
   let cartElement = document.getElementsByClassName('shopping-cart')[0];
   let namesElements = document.getElementsByClassName('product-title');
   let priceElements = document.getElementsByClassName('product-line-price');
   let addButtons = document.getElementsByClassName('add-product');
   let result = document.querySelector('textarea');
   let checkoutBtn = document.getElementsByClassName('checkout')[0];
 
   if (cartElement == null || namesElements == null || priceElements == null || addButtons == null || result == null || checkoutBtn == null) {
      throw new Error('Missing DOM element!');
   }
   let list = {};
 
   function listManager(obj, product, price) {
      if (obj.hasOwnProperty(product) == false) {
         obj[product] = 0;
      }
      obj[product] += Number(price);
      return obj;
   }
 
   function checkoutParser(obj) {
      let list = Object.keys(obj);
      let totalPrice = Object.values(obj).reduce((a, b) => a + b, 0);
      return `You bought ${list.join(', ')} for ${totalPrice.toFixed(2)}.`;
   }
 
   const butonHandlerMap = {
      'add-product': (target, result, list) => {
         let product = target.parentElement.parentElement.querySelector('.product-title').textContent;
         let price = target.parentElement.parentElement.querySelector('.product-line-price').textContent;
         list = listManager(list, product, price);
         result.textContent += `Added ${product} for ${Number(price).toFixed(2)} to the cart.\n`;
      },
 
      'checkout': (_, result, list) => {
         result.textContent += checkoutParser(list);
         cartElement.removeEventListener('click', buttonsHandler);
      }
   }
 
   function buttonsHandler(e) {
      if (typeof butonHandlerMap[e.target.classList.value] == 'function') {
         butonHandlerMap[e.target.classList.value](e.target, result, list);
      }
   }
 
   cartElement.addEventListener('click', buttonsHandler);
}