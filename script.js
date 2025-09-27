let senhaCorreta = "";
let totalVezes = 0;
let contador = 0;

function iniciarTreino() {
    senhaCorreta = document.getElementById("senha").value;
    totalVezes = parseInt(document.getElementById("vezes").value);
    contador = 0;
    document.getElementById("meta").innerText = totalVezes;
    document.getElementById("treino").classList.remove("hidden");
    document.getElementById("status").innerText = "";
    document.getElementById("contador").innerText = `0/${totalVezes}`;
}

function verificarSenha() {
    let entrada = document.getElementById("entradaSenha").value;
    if (entrada === senhaCorreta) {
        contador++;
        document.getElementById("status").innerText = "✅ Correto!";
        document.getElementById("status").style.color = "lightgreen";
    } else {
        document.getElementById("status").innerText = "❌ Incorreto!";
        document.getElementById("status").style.color = "red";
    }
    document.getElementById("entradaSenha").value = "";
    document.getElementById("contador").innerText = `${contador}/${totalVezes}`;
    if (contador >= totalVezes) {
        alert("🎉 Treinamento concluído!");
        document.getElementById("treino").classList.add("hidden");
    }
}
