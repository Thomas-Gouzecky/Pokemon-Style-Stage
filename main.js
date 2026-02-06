const guidelines = document.querySelector('#guidelines .container');
const toggleBtn = document.createElement('button');

document.addEventListener('mousemove', (mousePos) => {
  const rect = guidelines.getBoundingClientRect();
  const x = mousePos.clientX - rect.left;
  const y = mousePos.clientY - rect.top;

  guidelines.style.setProperty('--x', `${x}px`);
  guidelines.style.setProperty('--y', `${y}px`);
});

toggleBtn.textContent = 'Toggle Flashlight';
toggleBtn.className = 'flashlight-toggle';

document.getElementById('guidelines').appendChild(toggleBtn);

toggleBtn.addEventListener('click', () => {
  document.getElementById('guidelines').classList.toggle('flashlight-off');
});
