document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const phone = formData.get("phone");
  const password = formData.get("password");

  const phoneValid = phone.startsWith("+7");
  const passwordValid = password.length >= 6;

  if (phoneValid && passwordValid) {
    Swal.fire("Успех", "Вы успешно вошли в систему!", "success");
  } else {
    Swal.fire("Ошибка", "Неверный номер телефона или пароль.", "error");
  }
});