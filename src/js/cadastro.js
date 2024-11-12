function isEmailUnique(email) {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  return !users.some(user => user.email === email);
}

function isPasswordStrong(password) {
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordPattern.test(password);
}

function doPasswordsMatch(password, confirmPassword) {
  return password === confirmPassword;
}
const CryptoJS = require("crypto-js");

function encryptPassword(password) {
  return CryptoJS.AES.encrypt(password, 'secretKey').toString();
}

function decryptPassword(encryptedPassword) {
  const bytes = CryptoJS.AES.decrypt(encryptedPassword, 'secretKey');
  return bytes.toString(CryptoJS.enc.Utf8);
}

function cadastrarUsuario() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (!isEmailUnique(email)) {
    document.getElementById('errorMessage').textContent = 'E-mail já cadastrado!';
    return;
  }

  if (!isPasswordStrong(senha)) {
    document.getElementById('errorMessage').textContent = 'Senha fraca. A senha deve conter ao menos 8 caracteres, uma letra maiúscula, um número e um caractere especial.';
    return;
  }

  if (!doPasswordsMatch(senha, confirmPassword)) {
    document.getElementById('errorMessage').textContent = 'As senhas não coincidem!';
    return;
  }

  const user = {
    email,
    password: encryptPassword(senha)
  };

  const users = JSON.parse(localStorage.getItem('users') || '[]');
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));

  alert('Usuário cadastrado com sucesso!');
}

function init() {
  document.getElementById('signupButton').addEventListener('click', cadastrarUsuario);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    isEmailUnique,
    isPasswordStrong,
    doPasswordsMatch,
    encryptPassword,
    decryptPassword,
    init
  };
}
