// variáveis de validação do formulário
const namE = document.getElementById('name').value;
const age = document.getElementById('age').value;
const email = document.getElementById('email').value;
const job = document.getElementById('job').value;
const designation = document.getElementById('designation').value;
const productType = document.getElementById('productType').value;
const feedbackText = document.getElementById('feedbackText').value;
const submitButton = document.getElementById('submitBtn');

function submitFeedback() {
    alert('Thank you for your valuable feedback');
    document.getElementById('userName').innerHTML = namE;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userInfo').style.display = 'block';
}

// Evento de clique
submitButton.onclick = submitFeedback;

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitFeedback();
    }
});