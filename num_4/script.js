document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const email = formData.get("email");
  const password = formData.get("password");

  const emailValid = email.length >= 6;
  const passwordValid = password.length >= 6;

  if (emailValid && passwordValid) {
    Swal.fire("Успех", "Вы успешно вошли в систему!", "success");
  } else {
    Swal.fire("Ошибка", "Неверный email-адрес или пароль.", "error");
  }
});