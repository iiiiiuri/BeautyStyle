// produtos.js

const colares = [
  {
    imagem: 'src/img/colares/produtos/colar_diamante.webp',
    nome: 'Colar de Diamante',
    descricao: 'Colar com diamantes e acabamento em ouro branco.',
    parcelas: '12 X DE R$ 499,99',
    preco: 'R$ 5.999,00'
  },
  {
    imagem: 'src/img/colares/produtos/colar_pingente_coração.webp',
    nome: 'Colar Pingente Coração',
    descricao: 'Colar de prata com pingente em formato de coração.',
    parcelas: '12 X DE R$ 299,99',
    preco: 'R$ 3.599,00'
  },
  {
    imagem: 'src/img/colares/produtos/colar_rose.webp',
    nome: 'Colar Ouro Rosé',
    descricao: 'Colar com detalhes em ouro rosé.',
    parcelas: '12 X DE R$ 199,99',
    preco: 'R$ 2.399,00'
  },
  {
    imagem: 'src/img/colares/produtos/colar_pingente_rosa.webp',
    nome: 'Colar Pingente Rosa',
    descricao: 'Colar de ouro 18K com pingente em formato de rosa.',
    parcelas: '12 X DE R$ 399,99',
    preco: 'R$ 4.799,00'
  }
];

function popularColares(colares) {
  const container = document.querySelector('.grid');
  container.innerHTML = ''; // Limpa o conteúdo existente

  colares.forEach(colar => {
    const colarHTML = `
    <div class="relative bg-destaque shadow-lg rounded-md overflow-hidden pb-14">
      <div class="">
        <img src="${colar.imagem}" class="w-full h-60 object-cover" alt="${colar.nome}">
      </div>
      <div class="p-2">
        <h1 class="font-serif text-2xl text-center text-white font-bold">${colar.nome}</h1>
        <p class="text-white text-lg justify-center text-center font-light">${colar.descricao}</p>
        <p class="text-white font-light text-center font-serif mt-2">${colar.parcelas}</p>
        <p class="text-white font-bold text-2xl text-center mt-2">${colar.preco}</p>
        <div class="absolute bottom-0 left-0 right-0 flex justify-center p-2">
          <button class="bg-white text-black px-4 py-2 rounded-md hover:bg-red-900 add-to-cart" data-nome="${colar.nome}" data-preco="${colar.preco}" data-imagem="${colar.imagem}">Adicionar ao Carrinho</button>
        </div>
      </div>
    </div>
    `;
    container.innerHTML += colarHTML;
  });
}

// Chama a função para popular os colares
document.addEventListener('DOMContentLoaded', () => {
  popularColares(colares);
});