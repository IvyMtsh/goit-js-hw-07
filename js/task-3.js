const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
textInput.addEventListener('input', event => {
  const timedInput = event.target.value.trim();
  output.textContent = timedInput || 'Anonymous';
});
