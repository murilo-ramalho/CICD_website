document.getElementById("cadastroForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
  
    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
  
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    if (users.some(user => user.email === email)) {
      alert("Este email já está cadastrado!");
      return;
    }
  
    const newUser = { email, password };
    users.push(newUser);
  
    localStorage.setItem("users", JSON.stringify(users));
    alert("Usuário cadastrado com sucesso!");
    window.location.href = "login.html"; // Redireciona para a página de login
  });
  