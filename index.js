const input = document.querySelector('.modal input[type=text]');
const inputPosition = document.querySelector('.input-position');

const positionDropdown = () => {
  const inputBounds = input.getBoundingClientRect();

  inputPosition.style.top = `${inputBounds.top}px`;
  inputPosition.style.left = `${inputBounds.left}px`;
  inputPosition.style.width = `${inputBounds.width}px`;
  inputPosition.style.height = `${inputBounds.height}px`;
};

const renderLoop = () => {
  positionDropdown();
  window.requestAnimationFrame(renderLoop);
};

renderLoop();
