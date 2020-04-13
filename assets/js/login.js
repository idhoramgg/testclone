const userLogin = document.getElementById("userLogin");
const url = "https://5e8ec152e0e7de001685f98a.mockapi.io/coba";

let get = async () => {
  let response = await fetch(url);
  let data = await response.json();
  return data;
};

let loginUser = async (event) => {
  event.preventDefault();
  let userData = await get();
  let loginSuccess = false;

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  let data = await userData.filter(
    (e) => email === e.email && password === e.password
  );
  try {
    data[0].email === email && data[0].password === password;
    alert("Login Succsess");
    window.location = "index.html";
  } catch {
    alert("Login Gagal");
  }
};

userLogin.addEventListener("submit", loginUser);