function toggleTheme() {
  const newTheme = document.body.classList.contains('dark-theme') ? 'light' : 'dark';
  // Met à jour le contenu du bouton en fonction du nouveau thème
  document.getElementById('themeToggle').textContent = newTheme === 'light' ? 'Mode Sombre' : 'Mode Clair';
  // Enregistre le nouveau thème dans localStorage
  localStorage.setItem('theme', newTheme);
  // Met à jour le thème sur le corps de la page
  updateTheme();
}

function updateTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.body.className = savedTheme + '-theme'; // Remplace toutes les classes existantes par la nouvelle classe de thème
  document.getElementById('themeToggle').textContent = savedTheme === 'light' ? 'Mode Sombre' : 'Mode Clair';
}

// Ajoute l'écouteur d'événements pour le bouton de changement de thème
document.getElementById('themeToggle').addEventListener('click', toggleTheme);

// Charge le thème enregistré lorsque le DOM est prêt
window.addEventListener('DOMContentLoaded', (event) => {
  updateTheme();
});
