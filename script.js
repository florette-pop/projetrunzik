
document.querySelector('#add').addEventListener('click', function addPanier(e){

  let parentPanier = document.querySelector('#content-panier');
  let product = document.querySelector('#produit').innerHTML;
  let icon = document.querySelector('#panier');
  parentPanier.appendChild(document.querySelector('#produit'));
  console.log(parentPanier);

  
  localStorage.setItem(product, product);

  
})
