// populateProducts.js

const produtos = [
  {
    imagem: 'src/img/section3/image1.webp',
    nome: 'PAR DE ALIANÇAS DE OURO 18K',
    descricao: 'Alianças fabricadas manualmente, com equipamentos da mais alta tecnologia seguindo normas e padrões Nacionais e Internacionais...',
    orientacao: 'start',
    precoOriginal: 'R$ 2.200,00',
    precoDesconto: 'R$ 1.700,00',
  },
  {
    imagem: 'src/img/section3/image2.webp',
    nome: 'BRINCOS DE DIAMANTE ENCRUSTADO',
    descricao: 'Brincos fabricados manualmente, com equipamentos da mais alta tecnologia seguindo normas e padrões Nacionais e Internacionais...',
    orientacao: 'end',
    precoOriginal: 'R$ 11.700,00',
    precoDesconto: 'R$ 10.700,00',
  },
  {
    imagem: 'src/img/section3/image3.webp',
    nome: 'PULSEIRAS DE OURO 18K',
    descricao: 'Pulseiras fabricadas manualmente, com equipamentos da mais alta tecnologia seguindo normas e padrões Nacionais e Internacionais...',
    orientacao: 'start',
    precoOriginal: 'R$ 1.450,00',
    precoDesconto: 'R$ 1.100,00',
  }
];

function popularProdutos(produtos) {
  const container = document.getElementById('produtos-container');
  container.innerHTML = ''; // Limpa o conteúdo existente

  produtos.forEach(produto => {
    const produtoHTML = `
      <div class="w-full flex justify-start p-8">
        <div class="w-full md:flex md:items-center ${produto.orientacao === 'end' ? 'md:flex-row-reverse' : 'md:flex-row'}">
          <div class="md:w-1/2 flex justify-center md:justify-${produto.orientacao === 'end' ? 'start' : 'end'}">
            <img src="${produto.imagem}" alt="${produto.nome}" class="rounded-md object-cover">
          </div>
          <div class="md:w-1/2 text-left p-4">
            <h2 class="md:text-4xl font-bold font-serif text-detalhes mb-2">${produto.nome}</h2>
            <p class="md:text-2xl text-gray-700 mb-4 font-serif">${produto.descricao}</p>
            <span class="text-lg line-through text-gray-400 font-serif">${produto.precoOriginal}</span>
            <span class="text-3xl font-bold text-apoio ml-2 font-serif">${produto.precoDesconto}</span>
            <p class="text-md text-apoio mt-1">À VISTA</p>
            
            <div class="mt-4 w-full flex">
              <button class="bg-detalhes text-black md:py-2 md:px-4 rounded-sm hover:bg-apoio hover:text-white transition-all duration-100">COMPRAR</button>
              <button class="bg-detalhes text-black md:py-2 md:px-4 ml-2 rounded-sm hover:bg-apoio hover:text-white transition-all duration-100">VER MAIS</button>
            </div>
          </div>
        </div>
      </div>
      <div class="h-[1px] bg-detalhes my-4"></div>
    `;
    container.innerHTML += produtoHTML;
  });
}

// Chama a função para popular os produtos
document.addEventListener('DOMContentLoaded', () => {
  popularProdutos(produtos);
});