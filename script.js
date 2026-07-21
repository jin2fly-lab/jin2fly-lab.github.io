document.querySelectorAll('.touch-controls button').forEach((button)=>button.addEventListener('click',()=>window.snakeGame?.setDirection(button.dataset.direction)));
document.getElementById('restart').addEventListener('click',()=>window.snakeGame?.start());
