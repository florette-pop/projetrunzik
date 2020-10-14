
/*
document.querySelector('#add').addEventListener('click', function addPanier(e){

  let parentPanierName = document.querySelector('#content-panier-name');
  let price = document.querySelector('#price').innerHTML;
  let product = document.querySelector('#produit').innerHTML;
  let quantity = document.querySelector('#quantity').value;
  let totalPrice = ((parseInt(price))*(parseInt(quantity)));
  
  if (product === 'Casque Run’Zik') {
  localStorage.setItem('casque', [product,quantity,price,totalPrice]);
  document.querySelector('#content-panier-name').innerHTML = localStorage.getItem('casque').split(',')[0];
  document.querySelector('#content-panier-quantity').innerHTML = localStorage.getItem('casque').split(',')[1];
  document.querySelector('#content-panier-price').innerHTML = localStorage.getItem('casque').split(',')[2];
  document.querySelector('#content-panier-total-price').innerHTML = localStorage.getItem('casque').split(',')[3];
  
  }
  
})
*/
/*

const cart = {
  listeProduits: [],
  getTotalPrice() {
    return 0;
  },
  getTotalQtt() {
    return 0;
  },
  addProduct(product) {
    let indexProductExist = this.getIndexProductExist(product);
    if (indexProductExist == -1) {
      //Ajout d'un nouveau produit
      this.listeProduits.push(product)
    } else {
      this.listeProduits[indexProductExist].quantity += product.quantity
    }
  },
  getIndexProductExist(product) {
    let indexPExist = -1;
    for (let p in this.listeProduits) {
      if (this.listeProduits[p].id == product.id) {
        indexPExist = p;
      }
    }
    return indexPExist;
  },
  toString() {
    console.log(this);
  }
};
let currentCard = localStorage.getItem('cart');
console.log(JSON.parse(currentCard));


*/
//data-product ="brasard"  dans html à coter de id  après dataSet


/*


document.querySelector('#add').addEventListener('click', function addPanier(e){

  let product = document.querySelector('#produit');

 

const panier = {
  price: document.querySelector('#price').innerHTML,
  product: document.querySelector('#produit').innerHTML,
  quantity: document.querySelector('#quantity').value,
}
console.log(panier);

localStorage.setItem(product.dataset.product,JSON.stringify(panier));

})

*/



const cart = {
  listeProduits: [],
  addProduct(addProduct) {
  this.listeProduits.push(addProduct);
  }
}



document.querySelector('#add').addEventListener('click', function addPanier(e){


const product = {
  price: document.querySelector('#price').innerHTML,
  product: document.querySelector('#produit').innerHTML,
  quantity: document.querySelector('#quantity').value,
}


cart.addProduct(product);

localStorage.setItem('cart',JSON.stringify(cart));

})

//probleme savoir ajouter chaque produit car, la le produit remplace un autre
