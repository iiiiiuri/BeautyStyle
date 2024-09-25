// produtos.js

const pulseiras = [
    {
      imagem: 'src/img/pulseiras/produtos/pulseira_ouro_branco.webp',
      nome: 'Pulseira Ouro Branco',
      descricao: 'Pulseira com acabamento em ouro branco.',
      parcelas: '12 X DE R$ 199,99',
      preco: 'R$ 2.500,00'
    },
    {
      imagem: 'src/img/pulseiras/produtos/pulseira_prata.webp',
      nome: 'Pulseira Prata',
      descricao: 'Pulseira de prata com detalhes elegantes.',
      parcelas: '12 X DE R$ 399,99',
      preco: 'R$ 4.500,00'
    },
    {
      imagem: 'src/img/pulseiras/produtos/pulseira_ouro_rose.webp',
      nome: 'Pulseira Ouro Rosé',
      descricao: 'Pulseira com detalhes em ouro rosé.',
      parcelas: '12 X DE R$ 249,99',
      preco: 'R$ 3.000,00'
    },
    {
      imagem: 'src/img/pulseiras/produtos/pulseira_ouro_18k.webp',
      nome: 'Pulseira Ouro 18K',
      descricao: 'Pulseira de ouro 18K.',
      parcelas: '12 X DE R$ 349,99',
      preco: 'R$ 4.000,00'
    }
  ];
  
  function popularpulseiras(pulseiras) {
    const container = document.querySelector('.grid');
    container.innerHTML = ''; // Limpa o conteúdo existente
  
    pulseiras.forEach(pulseira => {
      const pulseiraHTML = `
<div class="relative bg-gray-50 shadow-lg rounded-md overflow-hidden pb-14">
  <div class="">
    <img src="${pulseira.imagem}" class="w-full h-60 object-cover" alt="${pulseira.nome}">
  </div>
  <div class="p-2">
    <!-- Título do produto usando a cor 'detalhes' para maior contraste -->
    <h1 class="font-serif text-2xl text-center text-black font-bold">${pulseira.nome}</h1>
    
    <!-- Descrição usando uma cor de texto neutra ou um cinza mais escuro para maior legibilidade -->
    <p class="text-gray-700 text-lg justify-center text-center font-light italic">${pulseira.descricao}</p>
    
    <!-- Parcelas mantendo a cor de apoio, ou um tom de cinza se preferir -->
    <p class="text-gray-600 font-light text-center font-serif mt-2">${pulseira.parcelas}</p>
    
    <!-- Preço mantido em preto para destaque -->
    <p class="text-gray-900 font-bold text-2xl text-center mt-2">${pulseira.preco}</p>
    
    <!-- Botão estilizado -->
    <div class="absolute bottom-0 left-0 right-0 flex justify-center p-2">
      <button class="bg-detalhes text-white border-[2px] border-apoio text-md font-semibold px-6 py-3 rounded-lg shadow-md transform hover:scale-105 hover:shadow-lg transition-all duration-300 hover:bg-apoio hover:text-black add-to-cart"
              data-nome="${pulseira.nome}" data-preco="${pulseira.preco}" data-imagem="${pulseira.imagem}">
          Adicionar ao Carrinho
      </button>
    </div>
  </div>
</div>
      `;
      container.innerHTML += pulseiraHTML;
    });
  }
  
  // Chama a função para popular  pulseira
  document.addEventListener('DOMContentLoaded', () => {
    popularpulseiras(pulseiras);
  });