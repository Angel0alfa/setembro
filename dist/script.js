const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navegacao');
function closeMenu() { nav.classList.remove('is-open'); menu.setAttribute('aria-expanded', 'false'); }
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('is-open', open); });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if(event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); } });
window.matchMedia('(min-width: 781px)').addEventListener('change', event => { if(event.matches) closeMenu(); });
const questions = [
 ['O que faz você se sentir acolhido?', 'Pode ser um gesto pequeno, uma pessoa ou um lugar.'],
 ['Como podemos ouvir sem julgar?', 'Pense em atitudes que abrem espaço para o outro.'],
 ['O que costuma deixar seu dia mais leve?', 'Não precisa ser algo grande ou extraordinário.'],
 ['O que pode tornar mais fácil pedir ajuda?', 'Uma conversa pode começar com alguém de confiança.'],
 ['Que cuidado você quer levar para nossa escola?', 'Vale pensar em uma atitude simples para o dia a dia.']
];
let questionIndex = 0;
function changeQuestion(direction) {
 questionIndex = (questionIndex + direction + questions.length) % questions.length;
 document.querySelector('#question-text').textContent = questions[questionIndex][0];
 document.querySelector('#question-hint').textContent = questions[questionIndex][1];
 document.querySelector('#question-count').textContent = `${String(questionIndex + 1).padStart(2, '0')} / 05`;
}
document.querySelector('#previous-question').addEventListener('click', () => changeQuestion(-1));
document.querySelector('#next-question').addEventListener('click', () => changeQuestion(1));

const motionToggle = document.querySelector('.motion-toggle');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
function setEffectsPaused(paused) {
 document.body.classList.toggle('effects-paused', paused);
 document.body.classList.toggle('effects-running', !paused);
 motionToggle.setAttribute('aria-pressed', String(paused));
 motionToggle.textContent = paused ? 'Ativar animações' : 'Pausar animações';
}
setEffectsPaused(reducedMotion.matches);
motionToggle.addEventListener('click', () => {
 setEffectsPaused(!document.body.classList.contains('effects-paused'));
});
reducedMotion.addEventListener('change', event => setEffectsPaused(event.matches));
