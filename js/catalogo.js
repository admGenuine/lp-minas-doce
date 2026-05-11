// ─── Configuração ────────────────────────────────────────────────────────────

const CARDS_PER_LOAD = 6;
let visibleCount = CARDS_PER_LOAD;

const checkboxes     = document.querySelectorAll('.category-filter');
const productCards   = Array.from(document.querySelectorAll('[data-category]'));
const emptyState     = document.getElementById('empty-state');
const verMaisWrapper = document.getElementById('ver-mais-wrapper');
const verMaisBtn     = document.getElementById('ver-mais-btn');

// ─── Render ───────────────────────────────────────────────────────────────────

function render() {
  const checked = Array.from(checkboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.value);

  const filtered = productCards.filter(card => checked.includes(card.dataset.category));
  const rest     = productCards.filter(card => !checked.includes(card.dataset.category));

  // Esconde os que não passam no filtro
  rest.forEach(card => { card.style.display = 'none'; });

  // Mostra apenas até visibleCount dos filtrados
  filtered.forEach((card, i) => {
    card.style.display = i < visibleCount ? '' : 'none';
  });

  // Estado vazio
  emptyState.style.display = filtered.length === 0 ? '' : 'none';

  // Botão "Ver mais"
  const remaining = filtered.length - visibleCount;
  if (remaining > 0) {
    verMaisWrapper.classList.remove('hidden');
    verMaisBtn.innerHTML = `Ver mais (${remaining} produto${remaining > 1 ? 's' : ''}) <span class="material-symbols-outlined text-sm">expand_more</span>`;
  } else {
    verMaisWrapper.classList.add('hidden');
  }
}

// ─── Eventos ─────────────────────────────────────────────────────────────────

// Filtro: reset e re-renderiza
checkboxes.forEach(cb => cb.addEventListener('change', () => {
  visibleCount = CARDS_PER_LOAD;
  render();
}));

// Ver mais
verMaisBtn.addEventListener('click', () => {
  visibleCount += CARDS_PER_LOAD;
  render();
});

// ─── Init ─────────────────────────────────────────────────────────────────────

render();
