const cart = {
  productList: [],
  productLists(){
    if (localStorage.getItem('cart')) {
      this.productList = JSON.parse(localStorage.getItem('cart')).productList;
    }
  },
  addProduct(product){
    let indexProductExist = this.getIndexProductExist(product);
    if(indexProductExist == -1){
      //Ajout d'un nouveau produit
      this.productList.push(product)
    } else {
      this.productList[indexProductExist].quantity += product.quantity
    }
  },
  getIndexProductExist(product){
    let indexPExist = -1;
    for(let p in this.productList){
      if(this.productList[p].name == product.name) {
        indexPExist = p;
      }
    }
    return indexPExist;
  },
  toString(){
    console.log(this);
  }
};

cart.productLists();
console.log(cart);

document.querySelector('#add').addEventListener('click', function(){
  const product = {
    name: document.querySelector('#produit').innerHTML,
    price: parseInt(document.querySelector('#price').innerHTML),
    quantity: parseInt(document.querySelector('#quantity').value),
  }
  console.log(product);
  cart.addProduct(product);
  localStorage.setItem('cart',JSON.stringify(cart));


  

})

let currentCard = JSON.parse(localStorage.getItem('cart'));
  
console.log(currentCard.productList);


  
  for (let index = 0; index < currentCard.productList.length; index++) {

    document.querySelector('#add-panier').innerHTML += '<li>Produits :</li><li id="content-panier-name'+index+'"></li><li>Prix :</li><li id="content-panier-price'+index+'"></li><li>Quantité :</li><li id="content-panier-quantity'+index+'"></li>';
    


    document.querySelector('#content-panier-name'+index).innerHTML = currentCard.productList[index].name;
    document.querySelector('#content-panier-price'+index).innerHTML = currentCard.productList[index].price;
    document.querySelector('#content-panier-quantity'+index).innerHTML = currentCard.productList[index].quantity;
    
    
  }

