// produtos.js

const aneis = [
  {
    imagem: 'src/img/aneis/produtos/anel_diamante.png',
    nome: 'Anel de Diamante',
    descricao: 'Anel de diamante com acabamento em ouro branco.',
    parcelas: '12 X DE R$ 199,99',
    preco: 'R$ 2.500,00'
  },
  {
    imagem: 'src/img/aneis/produtos/anel_esmeralda.png',
    nome: 'Anel de Esmeralda',
    descricao: 'Anel de esmeralda com acabamento em prata.',
    parcelas: '12 X DE R$ 299,99',
    preco: 'R$ 3.500,00'
  },
  {
    imagem: 'src/img/aneis/produtos/anel_safira.png',
    nome: 'Anel de Safira',
    descricao: 'Anel de safira com detalhes em ouro branco.',
    parcelas: '12 X DE R$ 249,99',
    preco: 'R$ 3.000,00'
  },
  {
    imagem: 'src/img/aneis/produtos/anel_lapis.png',
    nome: 'Anel de Lapis Lazuli',
    descricao: 'Anel de Lapis Lazuli.',
    parcelas: '12 X DE R$ 349,99',
    preco: 'R$ 4.000,00'
  },
];

function popularAneis(aneis) {
  const container = document.querySelector('.grid');
  container.innerHTML = ''; // Limpa o conteúdo existente

  aneis.forEach(anel => {
    const anelHTML = `
    <div class="relative bg-destaque shadow-lg rounded-md overflow-hidden pb-14">
      <div class="">
        <img src="${anel.imagem}" class="w-full h-60 object-cover" alt="${anel.nome}">
      </div>
      <div class="p-2">
        <h1 class="font-serif text-2xl text-center text-white font-bold">${anel.nome}</h1>
        <p class="text-white text-lg justify-center text-center font-light">${anel.descricao}</p>
        <p class="text-white font-light text-center font-serif mt-2">${anel.parcelas}</p>
        <p class="text-white font-bold text-2xl text-center mt-2">${anel.preco}</p>
        <div class="absolute bottom-0 left-0 right-0 flex justify-center p-2">
          <button class="bg-white text-black px-4 py-2 rounded-md hover:bg-red-900 add-to-cart" data-nome="${anel.nome}" data-preco="${anel.preco}" data-imagem="${anel.imagem}">Adicionar ao Carrinho</button>
        </div>
      </div>
    </div>
    `;
    container.innerHTML += anelHTML;
  });
}

// Chama a função para popular os anéis
document.addEventListener('DOMContentLoaded', () => {
  popularAneis(aneis);
});