document.querySelectorAll('.actions button').forEach(button => {
    button.addEventListener('click', () => {
        alert(`${button.textContent} button clicked!`);
    });
});
