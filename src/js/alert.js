// Função para exibir o alerta personalizado
function showAlert(message) {
  const alertBox = document.getElementById('custom-alert');
  const alertMessage = document.getElementById('alert-message');
  alertMessage.textContent = message;
  alertBox.classList.remove('hidden');
  alertBox.classList.add('flex', 'items-center');

  // Ocultar o alerta após 3 segundos
  setTimeout(() => {
    alertBox.classList.add('hidden');
    alertBox.classList.remove('flex', 'items-center');
  }, 3000);
} 

// Fechar o alerta ao clicar no botão de fechar
document.getElementById('close-alert').addEventListener('click', () => {
  const alertBox = document.getElementById('custom-alert');
  alertBox.classList.add('hidden');
  alertBox.classList.remove('flex', 'items-center');
});

// Adicionar evento de clique aos links das redes sociais
document.querySelectorAll('.social-link').forEach(link => {
  link.addEventListener('click', (event) => {
    const message = link.getAttribute('data-message');
    showAlert(message);
  });
});