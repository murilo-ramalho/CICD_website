document.addEventListener("DOMContentLoaded", function() {
  loadUsers();

  document.getElementById("addUserForm").addEventListener("submit", function(e) {
    e.preventDefault();
    addUser();
  });

  document.getElementById("logoutButton").addEventListener("click", function() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
  });
});

function loadUsers() {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const usersTable = document.getElementById("usersTable").getElementsByTagName('tbody')[0];
  usersTable.innerHTML = "";
  
  users.forEach((user, index) => {
    const row = usersTable.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    
    cell1.textContent = user.email;
    
    cell2.innerHTML = `
      <button onclick="deleteUser(${index})">Excluir</button>
    `;
  });
}

function addUser() {
  const email = document.getElementById("newEmail").value;
  const password = document.getElementById("newPassword").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  
  users.push({ email, password });
  localStorage.setItem("users", JSON.stringify(users));
  
  loadUsers();
  showMessage("Usuário adicionado com sucesso!", "success");
}

function deleteUser(index) {
  if (confirm("Tem certeza que deseja excluir este usuário?")) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));
    loadUsers();
    showMessage("Usuário excluído com sucesso!", "success");
  }
}

function showMessage(message, type) {
  const messageDiv = document.getElementById("message");
  messageDiv.style.display = "block";
  messageDiv.textContent = message;
  messageDiv.style.color = type === "error" ? "red" : "green";
}
