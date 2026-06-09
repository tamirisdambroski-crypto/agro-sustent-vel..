function calcularResultado() {
    let acertos = 0;
    const form = document.getElementById('quizForm');
    
    if (!form.q1.value || !form.q2.value || !form.q3.value) {
        alert("Por favor, responda todas as perguntas antes de enviar!");
        return;
    }

    if (form.q1.value === 'B') acertos++;
    if (form.q2.value === 'A') acertos++;
    if (form.q3.value === 'B') acertos++;

    const resultadoDiv = document.getElementById('result');
    
    // Estilização dinâmica do resultado
    if (acertos === 3) {
        resultadoDiv.style.background = "#b7e4c7";
        resultadoDiv.style.color = "#1b4332";
        resultadoDiv.innerHTML = `🏆 Excelente! Você acertou ${acertos} de 3 perguntas. Você entende tudo de agro sustentável!`;
    } else if (acertos === 2) {
        resultadoDiv.style.background = "#ffe3a8";
        resultadoDiv.style.color = "#744210";
        resultadoDiv.innerHTML = `🌱 Muito bom! Você acertou ${acertos} de 3 perguntas. Quase lá!`;
    } else {
        resultadoDiv.style.background = "#f9d5d5";
        resultadoDiv.style.color = "#742a2a";
        resultadoDiv.innerHTML = `🌾 Você acertou ${acertos} de 3 perguntas. Vamos rever os conteúdos para proteger nosso futuro!`;
    }
}
