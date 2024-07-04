document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o envio padrão do formulário

        // Captura dos valores dos campos
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        // Aqui você pode realizar validações dos campos, se necessário

        // Exibe a mensagem de sucesso
        alert('Mensagem enviada!');

        // Limpa os campos do formulário após enviar
        form.reset();
    });
});
