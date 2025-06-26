document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault();

      const nome = document.getElementById('nome').value.trim();
      const email = document.getElementById('email').value.trim();
      const assunto = document.getElementById('assunto').value.trim();
      const mensagem = document.getElementById('mensagem').value.trim();
      const feedback = document.getElementById('feedback');

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!nome || !email || !assunto || !mensagem) {
        feedback.textContent = 'Por favor, preencha todos os campos.';
        feedback.style.color = 'red';
      } else if (!emailRegex.test(email)) {
        feedback.textContent = 'Por favor, insira um e-mail válido.';
        feedback.style.color = 'red';
      } else if (mensagem.length < 20) {
        feedback.textContent = 'A mensagem deve conter no mínimo 20 caracteres.';
        feedback.style.color = 'red';
      } else {
        feedback.textContent = 'Mensagem enviada com sucesso!';
        feedback.style.color = 'green';
        this.reset();
      }
    });