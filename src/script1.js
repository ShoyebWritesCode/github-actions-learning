function changeTextColorToRed() {
    const header = document.querySelector('h1');
    if (header) {
      header.style.color = 'red';
    }
  }
  
  // Add event listener to the <h1> element
  document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('h1');
    if (header) {
      header.addEventListener('click', changeTextColorToRed);
    }
  });
  