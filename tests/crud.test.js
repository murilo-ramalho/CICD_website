const {
  isEmailUnique,
  isPasswordStrong,
  doPasswordsMatch,
  encryptPassword,
  decryptPassword
} = require('../src/js/cadastro');

global.localStorage = {
  getItem: jest.fn(() => JSON.stringify([{ email: "teste@exemplo.com", password: "EncryptedPassword" }])),
  setItem: jest.fn()
};

describe("Funções de Cadastro de Usuário", () => {
  
  beforeEach(() => {
    localStorage.clear();
  });

  test("deve validar e-mail único", () => {
    const email = "novo@exemplo.com";
    expect(isEmailUnique(email)).toBe(true);

    localStorage.setItem('users', JSON.stringify([{ email: "teste@exemplo.com" }]));
    expect(isEmailUnique("teste@exemplo.com")).toBe(false);
  });

  test("deve validar senha forte", () => {
    const validPassword = "Password123!";
    const invalidPassword = "password";
    
    expect(isPasswordStrong(validPassword)).toBe(true);
    expect(isPasswordStrong(invalidPassword)).toBe(false);
  });

  test("deve garantir que as senhas coincidem", () => {
    const password = "Password123!";
    const confirmPassword = "Password123!";
    const mismatchedPassword = "Password456!";
    
    expect(doPasswordsMatch(password, confirmPassword)).toBe(true);
    expect(doPasswordsMatch(password, mismatchedPassword)).toBe(false);
  });

  test("deve criptografar e descriptografar a senha corretamente", () => {
    const password = "Password123!";
    const encryptedPassword = encryptPassword(password);

    expect(encryptedPassword).not.toBe(password);
    expect(decryptPassword(encryptedPassword)).toBe(password);
  });

  test("não deve cadastrar usuário com e-mail já existente", () => {
    const email = "teste@exemplo.com";
    localStorage.setItem('users', JSON.stringify([{ email: "teste@exemplo.com" }]));

    expect(isEmailUnique(email)).toBe(false);
  });

  test("deve cadastrar um novo usuário com dados válidos", () => {
    const email = "novo@exemplo.com";
    const password = "Password123!";
    const confirmPassword = "Password123!";

    if (isEmailUnique(email) && isPasswordStrong(password) && doPasswordsMatch(password, confirmPassword)) {
      const user = { email, password: encryptPassword(password) };
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));

      const storedUser = JSON.parse(localStorage.getItem('users'))[1];
      expect(storedUser.email).toBe(email);
      expect(decryptPassword(storedUser.password)).toBe(password); // Verificando a senha descriptografada
    }
  });
});
