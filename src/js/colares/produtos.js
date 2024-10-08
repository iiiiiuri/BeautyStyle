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
<div class="relative bg-gray-50 shadow-lg rounded-md overflow-hidden pb-20">
  <div class="">
    <img src="${colar.imagem}" class="w-full h-60 object-cover" alt="${colar.nome}">
  </div>
  <div class="p-2">
    <!-- Título do produto usando a cor 'detalhes' para maior contraste -->
    <h1 class="font-serif text-2xl text-center text-black font-bold">${colar.nome}</h1>
    
    <!-- Descrição usando uma cor de texto neutra ou um cinza mais escuro para maior legibilidade -->
    <p class="text-gray-700 text-lg justify-center text-center font-light italic">${colar.descricao}</p>
    
    <!-- Parcelas mantendo a cor de apoio, ou um tom de cinza se preferir -->
    <p class="text-gray-600 font-light text-center font-serif mt-2">${colar.parcelas}</p>
    
    <!-- Preço mantido em preto para destaque -->
    <p class="text-gray-900 font-bold text-2xl text-center mt-2">${colar.preco}</p>
    
    <!-- Botão estilizado -->
    <div class="absolute bottom-0 left-0 right-0 flex justify-center p-2 mb-2">
      <button class="bg-detalhes text-white border-[2px] border-apoio text-md font-semibold px-6 py-3 rounded-lg shadow-md transform hover:scale-105 hover:shadow-lg transition-all duration-300 hover:bg-apoio hover:text-black add-to-cart"
              data-nome="${colar.nome}" data-preco="${colar.preco}" data-imagem="${colar.imagem}">
          Adicionar ao Carrinho
      </button>
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