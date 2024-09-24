// cart.js

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(item) {
  cart.push(item);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Item adicionado ao carrinho!');
}

document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const item = {
        nome: button.dataset.nome,
        preco: button.dataset.preco,
        imagem: button.dataset.imagem // Adiciona a URL da imagem ao item
      };
      addToCart(item);
    });
  });
});