function addToCart(dishName) {
      alert(`${dishName} добавлено в корзину!`);
  }
   const slider = document.getElementById('slider');
  const range = document.getElementById('range');

  range.addEventListener('input', () => {
    const slideIndex = parseInt(range.value);
    const cardWidth = slider.children[0].offsetWidth + 20; // ширина + gap
    slider.style.transform = `translateX(-${slideIndex * cardWidth}px)`;
  });