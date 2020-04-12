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

  let arr = [];
  userData.map((data) => {
    let datas = {
      email: data.email,
      password: data.password,
    };
    arr.push(datas);
  });

  for (let i = 0; i <= arr.length; i++) {
    if (email === arr[i].email && password === arr[i].password) {
      alert("Anda berhasil login");
      window.location.href = `${window.origin}/index.html`;
      break;
    } else {
      console.log("error");
    }
  }
 
};
console.log(loginUser)
userLogin.addEventListener("submit", loginUser);