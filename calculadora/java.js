// Botões de cálculo
const botoes = document.querySelectorAll('.botao');
const resultado = document.getElementById('resultado');
const container = document.getElementById('container');
const btnToggle = document.getElementById('btnToggle');

botoes.forEach(btn => {
  const valor = btn.getAttribute('data-value');
  const acao = btn.getAttribute('data-action');

  if (valor) {
    btn.addEventListener('click', () => {
      resultado.innerHTML += valor;
    });
  }

  if (acao === 'clean') {
    btn.addEventListener('click', () => resultado.innerHTML = '');
  }

  if (acao === 'back') {
    btn.addEventListener('click', () => {
      resultado.innerHTML = resultado.innerHTML.slice(0, -1);
    });
  }

  if (acao === 'calcular') {
    btn.addEventListener('click', () => {
      try {
        resultado.innerHTML = eval(resultado.innerHTML);
      } catch {
        resultado.innerHTML = 'Erro';
      }
    });
  }
});

// Botão de alternar tema
btnToggle.addEventListener('click', () => {
  btnToggle.classList.toggle('active');
  container.classList.toggle('active');
});
