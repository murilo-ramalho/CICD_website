// Exibir usuários na tabela
function loadUsers() {
    const usersTable = document.getElementById("usersTable").querySelector("tbody");
    usersTable.innerHTML = "";
  
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    users.forEach((user, index) => {
      const row = document.createElement("tr");
  
      const emailCell = document.createElement("td");
      emailCell.textContent = user.email;
      row.appendChild(emailCell);
  
      const actionsCell = document.createElement("td");
      const editButton = document.createElement("button");
      editButton.textContent = "Editar";
      editButton.addEventListener("click", () => editUser(index));
      actionsCell.appendChild(editButton);
  
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Excluir";
      deleteButton.addEventListener("click", () => deleteUser(index));
      actionsCell.appendChild(deleteButton);
  
      row.appendChild(actionsCell);
  
      usersTable.appendChild(row);
    });
  }
  
  // Editar usuário
  function editUser(index) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users[index];
  
    document.getElementById("editEmail").value = user.email;
    document.getElementById("editPassword").value = user.password;
  
    document.getElementById("editForm").style.display = "block";
  
    document.getElementById("editForm").onsubmit = function (e) {
      e.preventDefault();
  
      const updatedEmail = document.getElementById("editEmail").value;
      const updatedPassword = document.getElementById("editPassword").value;
  
      users[index] = { email: updatedEmail, password: updatedPassword };
      localStorage.setItem("users", JSON.stringify(users));
  
      document.getElementById("editForm").style.display = "none";
      loadUsers();
    };
  }
  
  // Excluir usuário
  function deleteUser(index) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));
    loadUsers();
  }
  
  // Logout
  document.getElementById("logoutButton").addEventListener("click", function () {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html"; // Redireciona para a página de login
  });
  
  // Cancelar edição
  document.getElementById("cancelEdit").addEventListener("click", function () {
    document.getElementById("editForm").style.display = "none";
  });
  
  // Carregar usuários ao carregar a página
  window.onload = loadUsers;
  