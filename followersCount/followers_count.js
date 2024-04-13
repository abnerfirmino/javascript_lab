let count = 0;

function increaseCountState() {
    count += 1;
}

function displayCount() {
    document.getElementById("countDisplay").innerHTML = count;
}

function increaseCount() {
    increaseCountState(); // incrementa +1 no valor de count
    displayCount(); // exibe o valor de count para o usuário (UI)
    checkCountValue(); // verifica a quantidade de seguidores por postagem
}

function checkCountValue() {
    if (count === 10) {
        alert("Sua postagem obteve mais 10 seguidores! Parabéns!");
    } else if (count === 20) {
        alert("Sua postagem obteve mais 20 seguidores! Continue postando!");
    }
}

function resetState() {
    count = 0;
}

function resetFollowers() {
    resetState(); // reseta o número de seguidores
    displayCount();
    alert("Seu número de seguidores foi resetado!")
}