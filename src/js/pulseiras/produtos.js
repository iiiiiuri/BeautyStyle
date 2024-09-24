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
      <div class="relative bg-destaque shadow-lg rounded-md overflow-hidden pb-14">
        <div class="">
          <img src="${pulseira.imagem}" class="w-full h-60 object-cover" alt="${pulseira.nome}">
        </div>
        <div class="p-2">
          <h1 class="font-serif text-2xl text-center text-white font-bold">${pulseira.nome}</h1>
          <p class="text-white text-lg justify-center text-center font-light">${pulseira.descricao}</p>
          <p class="text-white font-light text-center font-serif mt-2">${pulseira.parcelas}</p>
          <p class="text-white font-bold text-2xl text-center mt-2">${pulseira.preco}</p>
          <div class="absolute bottom-0 left-0 right-0 flex justify-center p-2">
            <button class="bg-white text-black px-4 py-2 rounded-md hover:bg-red-900 add-to-cart" data-nome="${pulseira.nome}" data-preco="${pulseira.preco}" data-imagem="${pulseira.imagem}">Adicionar ao Carrinho</button>
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