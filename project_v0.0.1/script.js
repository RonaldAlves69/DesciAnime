document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.toggle-description').forEach(button => {
        button.addEventListener('click', () => {
            const description = button.nextElementSibling; // Seleciona o próximo elemento (descrição)
            description.classList.toggle('show'); // Alterna a classe 'show'
            
            // Alterna o texto do botão entre "Mostrar descrição" e "Esconder descrição"
            if (description.classList.contains('show')) {
                button.textContent = "Esconder descrição";
            } else {
                button.textContent = "Mostrar descrição";
            }
        });
    });
});
