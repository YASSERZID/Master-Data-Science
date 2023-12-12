var bouton = document.getElementById('autresUtil');
var formulaire = document.getElementById('login');

formulaire.classList.add('replie');

bouton.addEventListener('click', function() {
  formulaire.classList.toggle('replie');
});