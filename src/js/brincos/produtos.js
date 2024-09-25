// produtos.js

const brincos = [
  {
    imagem: 'src/img/brincos/produtos/brinco_diamantado.webp',
    nome: 'Brinco de diamante',
    descricao: 'Brinco de diamante com acabamento em ouro branco.',
    parcelas: '12 X DE R$ 199,99',
    preco: 'R$ 2.500,00'
  },
  {
    imagem: 'src/img/brincos/produtos/brinco_agata.webp',
    nome: 'Brinco Ágata',
    descricao: 'Brinco de Ágata.',
    parcelas: '12 X DE R$ 399,99',
    preco: 'R$ 4.500,00'
  },
  {
    imagem: 'src/img/brincos/produtos/brinco_safira.webp',
    nome: 'Brinco de Safira',
    descricao: 'Brinco de Safira com detalhes em ouro branco.',
    parcelas: '12 X DE R$ 249,99',
    preco: 'R$ 3.000,00'
  },
  {
    imagem: 'src/img/brincos/produtos/brinco_jade.webp',
    nome: 'Brinco de Jade',
    descricao: 'Brinco de Jade.',
    parcelas: '12 X DE R$ 349,99',
    preco: 'R$ 4.000,00'
  },
];

function popularBrincos(brincos) {
  const container = document.querySelector('.grid');
  container.innerHTML = ''; // Limpa o conteúdo existente

  brincos.forEach(brinco => {
    const brincoHTML = `
<div class="relative bg-gray-50 shadow-lg rounded-md overflow-hidden pb-14">
  <div class="">
    <img src="${brinco.imagem}" class="w-full h-60 object-cover" alt="${brinco.nome}">
  </div>
  <div class="p-2">
    <!-- Título do produto usando a cor 'detalhes' para maior contraste -->
    <h1 class="font-serif text-2xl text-center text-black font-bold">${brinco.nome}</h1>
    
    <!-- Descrição usando uma cor de texto neutra ou um cinza mais escuro para maior legibilidade -->
    <p class="text-gray-700 text-lg justify-center text-center font-light italic">${brinco.descricao}</p>
    
    <!-- Parcelas mantendo a cor de apoio, ou um tom de cinza se preferir -->
    <p class="text-gray-600 font-light text-center font-serif mt-2">${brinco.parcelas}</p>
    
    <!-- Preço mantido em preto para destaque -->
    <p class="text-gray-900 font-bold text-2xl text-center mt-2">${brinco.preco}</p>
    
    <!-- Botão estilizado -->
    <div class="absolute bottom-0 left-0 right-0 flex justify-center p-2">
      <button class="bg-detalhes text-white border-[2px] border-apoio text-md font-semibold px-6 py-3 rounded-lg shadow-md transform hover:scale-105 hover:shadow-lg transition-all duration-300 hover:bg-apoio hover:text-black add-to-cart"
              data-nome="${brinco.nome}" data-preco="${brinco.preco}" data-imagem="${brinco.imagem}">
          Adicionar ao Carrinho
      </button>
    </div>
  </div>
</div>
    `;
    container.innerHTML += brincoHTML;
  });
}

// Chama a função para popular os brincos
document.addEventListener('DOMContentLoaded', () => {
  popularBrincos(brincos);
});