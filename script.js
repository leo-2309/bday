function playMeow(img) {
  const meowSound = document.getElementById('meowSound');
  meowSound.play();
  addJumpAnimation(img);
}

function playWoof(img) {
  const woofSound = document.getElementById('woofSound');
  woofSound.play();
  addJumpAnimation(img);
}

function addJumpAnimation(img) {
  img.classList.add('jump');
  img.addEventListener('animationend', () => {
    img.classList.remove('jump');
  }, { once: true });
}

function openGift() {
  const giftAnimation = document.getElementById('giftAnimation');
  giftAnimation.style.display = 'block';
  giftAnimation.classList.add('show');
}


function openGift() {
  const giftAnimation = document.getElementById('giftAnimation');
  const message = document.createElement('div');
  
  message.classList.add('message');
  message.textContent = 'Olha! Um sushi-gato enorme!';

  giftAnimation.style.display = 'block'; // Mostra o sushi-gato
  giftAnimation.appendChild(message); // Adiciona a mensagem
  setTimeout(() => {
    message.style.display = 'block'; // Mostra a mensagem após o início da animação
  }, 2000); // Aguarda o término do squash para exibir a mensagem
}
