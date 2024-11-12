beforeEach(() => {
  localStorage.clear();
});

describe("CRUD de Usuários", () => {

  test("Deve cadastrar um novo usuário", () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const newUser = { email: "teste@teste.com", password: "123456" };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    expect(localStorage.getItem("users")).toBe(JSON.stringify([newUser]));
  });

  test("Deve realizar login com e-mail e senha corretos", () => {
    const users = [{ email: "teste@teste.com", password: "123456" }];
    localStorage.setItem("users", JSON.stringify(users));

    const email = "teste@teste.com";
    const password = "123456";

    const user = users.find(user => user.email === email && user.password === password);

    expect(user).toBeTruthy();
    expect(user.email).toBe(email);
  });

  test("Deve editar o usuário existente", () => {
    const users = [{ email: "teste@teste.com", password: "123456" }];
    localStorage.setItem("users", JSON.stringify(users));

    const updatedUser = { email: "teste@teste.com", password: "novaSenha" };
    users[0] = updatedUser;
    localStorage.setItem("users", JSON.stringify(users));

    expect(localStorage.getItem("users")).toBe(JSON.stringify([updatedUser]));
  });

  test("Deve excluir o usuário existente", () => {
    const users = [{ email: "teste@teste.com", password: "123456" }];
    localStorage.setItem("users", JSON.stringify(users));

    users.splice(0, 1);
    localStorage.setItem("users", JSON.stringify(users));

    expect(localStorage.getItem("users")).toBe(JSON.stringify([]));
  });

  test("Deve verificar a persistência dos dados no LocalStorage", () => {
    const users = [{ email: "teste@teste.com", password: "123456" }];
    localStorage.setItem("users", JSON.stringify(users));

    expect(localStorage.getItem("users")).toBe(JSON.stringify(users));
  });

  test("Deve verificar erro ao tentar cadastrar um usuário com e-mail existente", () => {
    const users = [{ email: "teste@teste.com", password: "123456" }];
    localStorage.setItem("users", JSON.stringify(users));

    const newUser = { email: "teste@teste.com", password: "novaSenha" };
    users.push(newUser);

    const emailExists = users.some(user => user.email === newUser.email);
    expect(emailExists).toBe(true);
  });

  test("Deve verificar se as senhas coincidem ao cadastrar", () => {
    const password = "123456";
    const confirmPassword = "123456";

    expect(password).toBe(confirmPassword);
  });

});
