//API CONSUMIDA DE https://scrollrevealjs.org/api/reveal.html
ScrollReveal({ reset: true });
ScrollReveal({distance: '60px'})

ScrollReveal().reveal('.hero-content', {delay: 100})
ScrollReveal().reveal('.networks', {delay: 500})
ScrollReveal().reveal('.faseOne-capsule');
ScrollReveal().reveal('.aboutMe-content', {delay: 200, origin: 'right'});
ScrollReveal().reveal('.card', {delay: 250, origin: 'left'});
ScrollReveal().reveal('.block-project', {delay:290, origin: 'left'})
ScrollReveal().reveal('.local-image-projects', {delay:290, origin: 'top'})
ScrollReveal().reveal('.form-content', {delay: 200, origin: 'right'});
ScrollReveal().reveal('.block-contact', {delay: 200, origin: 'left'});


//FUNÇÃO CHAMA NO WHATS

const btn = document.getElementById('send');

btn.addEventListener('click', (event) => {
    const nome = document.getElementById('nome').value;
	const email = document.getElementById('email').value;
	const text = document.getElementById('text').value;
	
    const url = "https://api.whatsapp.com/send?phone=5547996660361&text=Olá, meu nome é " + nome + " e meu e-mail é o " + email + " o motivo do meu contato é: " + text;
    window.location.href = url;
	event.preventDefault();
});