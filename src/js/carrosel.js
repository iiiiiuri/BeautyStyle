const images = document.querySelectorAll('.carousel-images img');
const indicators = document.querySelectorAll('#indicators span');
let currentIndex = 0;

function showImage(index) {
    images.forEach((img, i) => {
        if (i === index) {
            img.classList.remove('opacity-0', 'translate-x-full');
            img.classList.add('opacity-100', 'translate-x-0');
        } else {
            img.classList.remove('opacity-100', 'translate-x-0');
            img.classList.add('opacity-0', 'translate-x-full');
        }
        // Atualiza os indicadores
        indicators[i].classList.toggle('bg-pink-600', i === index);
        indicators[i].classList.toggle('bg-gray-300', i !== index);
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

document.getElementById('nextBtn').addEventListener('click', nextImage);
document.getElementById('prevBtn').addEventListener('click', prevImage);

setInterval(nextImage, 3000); // Troca de imagem a cada 3 segundos

// Inicializa a primeira imagem
showImage(currentIndex);
