document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const login = formData.get("login");
  const password = formData.get("password");

  const loginValid = login.length >= 6;
  const passwordValid = password.length >= 6;

  if (loginValid && passwordValid) {
    Swal.fire("Успех", "Вы успешно вошли в систему!", "success");
  } else {
    Swal.fire("Ошибка", "Неверный email-адрес или пароль.", "error");
  }
});
