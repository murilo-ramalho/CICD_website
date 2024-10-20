document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    const user = users.find(user => user.email === email && user.password === password);
  
    if (user) {
      alert("Login bem-sucedido!");
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      window.location.href = "usuarios.html"; // Redireciona para a página de usuários
    } else {
      alert("Email ou senha incorretos!");
    }
  });
  