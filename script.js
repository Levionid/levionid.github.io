const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const applyTheme = (theme) => {
  if (theme === 'dark') {
    body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
  }
};

const savedTheme = localStorage.getItem('theme');
const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = savedTheme || (userPrefersDark ? 'dark' : 'light');
applyTheme(initialTheme);

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        let newTheme = body.classList.contains('dark-theme') ? 'light' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });
}


function createNotification(message) {
  const container = document.getElementById('notification-container');
  if (!container) return;

  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.innerHTML = `
    ${message}
    <button class="close-btn">×</button>
    <div class="progress-bar"></div>
  `;
  container.appendChild(notification);
  
  setTimeout(() => notification.classList.add('show'), 10);

  let dismissTimeout;
  
  const dismiss = () => {
    notification.classList.remove('show');
    notification.classList.add('swiping-out');
    clearTimeout(dismissTimeout);
    notification.addEventListener('transitionend', () => notification.remove(), { once: true });
  };
  
  dismissTimeout = setTimeout(dismiss, 4000);

  notification.querySelector('.close-btn').addEventListener('click', dismiss);
  
  notification.addEventListener('mouseenter', () => clearTimeout(dismissTimeout));
  notification.addEventListener('mouseleave', () => dismissTimeout = setTimeout(dismiss, 2000));
  
  let startX, currentX, isDragging = false;
  
  const onPointerDown = (e) => {
    startX = e.clientX;
    isDragging = true;
    notification.style.transition = 'none';
    notification.style.cursor = 'grabbing';
  };
  
  const onPointerMove = (e) => {
    if (!isDragging) return;
    currentX = e.clientX;
    const deltaX = currentX - startX;
    if (deltaX > 0) {
        notification.style.transform = `translateX(${deltaX}px) scale(${1 - deltaX/1000})`;
        notification.style.opacity = 1 - deltaX / 200;
    }
  };
  
  const onPointerUp = (e) => {
    if (!isDragging) return;
    isDragging = false;
    notification.style.cursor = 'grab';
    notification.style.transition = 'all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)';
    const deltaX = e.clientX - startX;
    
    if (deltaX > 100) {
      dismiss();
    } else {
      notification.style.transform = '';
      notification.style.opacity = '';
    }
  };

  notification.addEventListener('pointerdown', onPointerDown);
  window.addEventListener('pointermove', onPointerMove);
  window.addEventListener('pointerup', onPointerUp, { once: true });
}

function copyIpAndNotify() {
    const ipText = document.getElementById('ip-text').innerText;
    navigator.clipboard.writeText(ipText).then(() => {
        createNotification('IP-адрес скопирован!');
    });
}

// --- Homepage Scroll Animations ---
document.addEventListener('DOMContentLoaded', () => {
  const isHomePage = document.body.classList.contains('home-page');
  if (isHomePage) {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    if (revealElements.length === 0) return;
    
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
      revealObserver.observe(el);
    });
  }
});