document.getElementById("cadastroForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  
  if (password !== confirmPassword) {
    document.getElementById("error-message").textContent = "As senhas não coincidem!";
    document.getElementById("error-message").style.display = "block";
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];
  
  if (users.find(user => user.email === email)) {
    document.getElementById("error-message").textContent = "Este e-mail já está cadastrado!";
    document.getElementById("error-message").style.display = "block";
    return;
  }

  users.push({ email, password });
  localStorage.setItem("users", JSON.stringify(users));
  
  alert("Usuário cadastrado com sucesso!");
  window.location.href = "login.html";
});
