import '../css/app.css'

console.log('Vite + Tailwind v4 loaded!')

// Test if CSS is working
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM ready')
  const body = document.body
  console.log('Body background color:', getComputedStyle(body).backgroundColor)

      // Homepage sticky navigation
      const homepageNav = document.getElementById('homepage-nav');
      if (homepageNav) {
          window.addEventListener('scroll', () => {
              if (window.scrollY > 50) {
                  homepageNav.classList.add('scrolled');
              } else {
                  homepageNav.classList.remove('scrolled');
              }
          });
      }
      
      // Mobile menu functionality
      function setupMobileMenu(buttonId, overlayId, closeId) {
          const button = document.getElementById(buttonId);
          const overlay = document.getElementById(overlayId);
          const close = document.getElementById(closeId);
          
          if (button && overlay && close) {
              button.addEventListener('click', () => {
                  overlay.classList.add('open');
                  document.body.style.overflow = 'hidden';
              });
              
              close.addEventListener('click', () => {
                  overlay.classList.remove('open');
                  document.body.style.overflow = 'auto';
              });
              
              // Close on overlay click
              overlay.addEventListener('click', (e) => {
                  if (e.target === overlay) {
                      overlay.classList.remove('open');
                      document.body.style.overflow = 'auto';
                  }
              });
          }
      }
      
      // Setup mobile menus
      setupMobileMenu('mobile-menu-button', 'mobile-menu-overlay', 'mobile-menu-close');
      setupMobileMenu('mobile-menu-button-inner', 'mobile-menu-overlay-inner', 'mobile-menu-close-inner');
  });