const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// --- Theme Switcher ---
const applyTheme = (theme) => {
  if (theme === 'dark') {
    body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
  }
};

const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        let newTheme = body.classList.contains('dark-theme') ? 'light' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });
}


// --- IP Copy Function ---
function copyIp() {
    const ipText = document.getElementById('ip-text').innerText;
    const copyButton = document.querySelector('.copy-button');
    
    navigator.clipboard.writeText(ipText).then(() => {
        copyButton.innerText = 'Скопировано!';
        setTimeout(() => {
            copyButton.innerText = 'Копировать';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy IP: ', err);
        copyButton.innerText = 'Ошибка';
        setTimeout(() => {
            copyButton.innerText = 'Копировать';
        }, 2000);
    });
}