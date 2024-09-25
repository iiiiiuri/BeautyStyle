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
<div class="relative bg-gray-50 shadow-lg rounded-md overflow-hidden pb-20">
  <div class="">
    <img src="${anel.imagem}" class="w-full h-60 object-cover" alt="${anel.nome}">
  </div>
  <div class="p-2">
    <!-- Título do produto usando a cor 'detalhes' para maior contraste -->
    <h1 class="font-serif text-2xl text-center text-black font-bold">${anel.nome}</h1>
    
    <!-- Descrição usando uma cor de texto neutra ou um cinza mais escuro para maior legibilidade -->
    <p class="text-gray-700 text-lg justify-center text-center font-light italic">${anel.descricao}</p>
    
    <!-- Parcelas mantendo a cor de apoio, ou um tom de cinza se preferir -->
    <p class="text-gray-600 font-light text-center font-serif mt-2">${anel.parcelas}</p>
    
    <!-- Preço mantido em preto para destaque -->
    <p class="text-gray-900 font-bold text-2xl text-center mt-2">${anel.preco}</p>
    
    <!-- Botão estilizado -->
    <div class="absolute bottom-0 left-0 right-0 flex justify-center p-2 mb-2">
      <button class="bg-detalhes text-white border-[2px] border-apoio text-md font-semibold px-6 py-3 rounded-lg shadow-md transform hover:scale-105 hover:shadow-lg transition-all duration-300 hover:bg-apoio hover:text-black add-to-cart"
              data-nome="${anel.nome}" data-preco="${anel.preco}" data-imagem="${anel.imagem}">
          Adicionar ao Carrinho
      </button>
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