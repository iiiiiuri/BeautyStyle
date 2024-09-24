document.addEventListener('DOMContentLoaded', () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartContainer = document.getElementById('cart-container');
  const totalPriceElement = document.getElementById('total-price');
  const installmentInfoElement = document.getElementById('installment-info');
  
  let totalValue = 0; // Variável para o total

  cartContainer.innerHTML = ''; // Limpa o conteúdo existente

  if (cart.length === 0) {
    cartContainer.innerHTML = '<p class="text-center text-gray-500">Seu carrinho está vazio.</p>';
  } else {
    // Agrupa itens no carrinho por nome
    const groupedCart = groupCartItems(cart);
    
    for (const [nome, item] of Object.entries(groupedCart)) {
      console.log(item);
      const precoNumerico = convertPriceToNumber(item.preco) * item.quantidade; // Calcula o total para este item
      totalValue += precoNumerico; // Adiciona ao total

      const itemHTML = `
        <div class="flex flex-col md:flex-row justify-between items-center p-2 border-b border-gray-300 space-y-4 md:space-y-0">
          <!-- Imagem do produto -->
          <img src="${item.imagem}" alt="${nome}" class="w-40 h-40 md:w-32 md:h-32 object-cover rounded-md">
          
          <!-- Informações do produto -->
          <div class="flex-1 text-center md:text-left ml-4">
            <span class="block font-semibold">${nome} (x${item.quantidade})</span>
            <span class="block text-gray-600">${(item.preco)} cada</span> <!-- Preço formatado -->
            <span class="block text-gray-600">Total: ${formatPrice(precoNumerico)}</span> <!-- Total para o item -->
          </div>

          <!-- Botão de remover -->
          <button class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all duration-200" onclick="removeFromCart('${nome}')">
            Remover
          </button>
        </div>
      `;
      cartContainer.innerHTML += itemHTML;
    }

    // Atualiza o preço total e as informações de parcelamento
    totalPriceElement.textContent = formatPrice(totalValue);
    installmentInfoElement.textContent = `OU EM ATÉ 12X DE ${formatPrice(totalValue / 12)}`;
  }
});

// Agrupa itens no carrinho por nome
function groupCartItems(cart) {
  return cart.reduce((acc, item) => {
    if (acc[item.nome]) {
      acc[item.nome].quantidade += 1; // Incrementa a quantidade se já existir
    } else {
      acc[item.nome] = { ...item, quantidade: 1 }; // Cria nova entrada com quantidade
    }
    return acc;
  }, {});
}

function removeFromCart(nome) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart = cart.filter(item => item.nome !== nome); // Remove o item pelo nome
  localStorage.setItem('cart', JSON.stringify(cart));
  location.reload(); // Recarrega a página para atualizar a interface do usuário
}

// Função para converter o preço string para número
function convertPriceToNumber(preco) {
  return Number(preco.replace('R$', '').replace(/\./g, '').replace(',', '.').trim());
}

// Função para formatar número para o formato de preço brasileiro
function formatPrice(value) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}
