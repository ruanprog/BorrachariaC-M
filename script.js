const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = document.getElementById('theme-icon');

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  if (body.classList.contains('dark-mode')) {
    themeToggle.textContent = ' Modo claro';
    themeIcon.classList.replace('fa-moon', 'fa-sun'); // Alterna para ícone de sol
  } else {
    themeToggle.textContent = ' Modo escuro';
    themeIcon.classList.replace('fa-sun', 'fa-moon'); // Alterna para ícone de lua
  }
});

document.getElementById('sobre-nos-btn').addEventListener('click', function() {
  const sobreMimSection = document.getElementById('sobre-nos');
  if (sobreMimSection.classList.contains('hidden')) {
    sobreMimSection.classList.remove('hidden');
  } else {
    sobreMimSection.classList.add('hidden');
  }
});
