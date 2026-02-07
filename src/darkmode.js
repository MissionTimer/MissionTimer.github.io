/* script.js */

const toggleButton = document.getElementById('theme-toggle');
const htmlElement = document.documentElement; // Refers to the <html> tag

// Function to set the theme
function setTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

// 1. Check for saved user preference first
const savedTheme = localStorage.getItem('theme');

// 2. Check for system preference if no saved preference
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme) {
    setTheme(savedTheme);
} else if (systemPrefersDark) {
    setTheme('dark');
}

// 3. Add Event Listener to the button
toggleButton.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');

    if (currentTheme === 'dark') {
        setTheme('light');
    } else {
        setTheme('dark');
    }
});