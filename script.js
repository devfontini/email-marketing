// Seleciona os elementos HTML
const emailInput = document.getElementById("emailInput");
const subscribeBtn = document.getElementById("subscribeBtn");
const confirmationMessage = document.getElementById("confirmationMessage");

// Valida e processa o email ao clicar no botão
subscribeBtn.addEventListener("click", () => {
    const email = emailInput.value.trim();

    if (validateEmail(email)) {
        confirmationMessage.innerText = "✅ Cadastro realizado com sucesso!";
        emailInput.value = "";
    } else {
        confirmationMessage.innerText = "❌ Insira um e-mail válido!";
        confirmationMessage.style.color = "red";
    }
});

// Permite cadastrar pressionando Enter
emailInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        subscribeBtn.click();
    }
});

// Função para validar e-mail
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
