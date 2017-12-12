var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let itemPrice = Math.floor(Math.random() * 100)+1;
  cart.push({[item]: itemPrice});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  let cartList = []; 
  if(cart == ''){
    return console.log(`Your shopping cart is empty.`);
  } 
  for (let i=0; i < cart.length; i++) {
    let objectInCart = cart[i]; //This will return the k:v pair
    let item = (Object.keys(objectInCart))[0]; //This will return the key
    let price = objectInCart[item]; //This wil return the value 
    cartList.push(`${item} at $${price}`); 
  }
  switch(cart.length) {
    case 1:
        break;
    case 2:
        cartList = cartList.join(' and ');
        break;
    default:
        cartList[cart.length - 1] = "and ".concat(cartList[cart.length - 1]);
        cartList = cartList.join(', ');
  }
   console.log(`In your cart, you have ${cartList}.`);
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
