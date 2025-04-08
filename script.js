document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.querySelector('.download-button');
  
    downloadBtn.addEventListener('click', () => {
      
      downloadBtn.classList.add('loading');
      downloadBtn.textContent = 'Carregando...';
  
      
      setTimeout(() => {
        downloadBtn.classList.remove('loading');
        downloadBtn.textContent = 'Download';
      }, 7000);
    });
  });
  const container = document.querySelector('.custom-card');
  let isBouncing = false;

  container.addEventListener('scroll', () => {
    if (isBouncing) return;

    const scrollTop = container.scrollTop;
    const scrollHeight = container.scrollHeight;
    const containerHeight = container.clientHeight;

    if (scrollTop === 0 || scrollTop + containerHeight >= scrollHeight) {
      isBouncing = true;
      container.animate(
        [
          { transform: 'translateY(0)' },
          { transform: 'translateY(-10px)' },
          { transform: 'translateY(0)' },
          { transform: 'translateY(5px)' },
          { transform: 'translateY(0)' }
        ],
        {
          duration: 500,
          easing: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)'
        }
      ).onfinish = () => isBouncing = false;
    }
  });
  