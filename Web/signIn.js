function toggleTheme() {
  const body = document.body;
  const icon = document.getElementById('Icon');
  
  body.classList.toggle('dark');
  body.classList.toggle('light');

  icon.classList.remove('icon-transition');
  void icon.offsetWidth;
  icon.classList.add('icon-transition', 'active');
  
  if (body.classList.contains('dark')) {
    icon.classList.remove('fa-sun-bright');
    icon.classList.add('fa-moon');
  } else {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun-bright');
  }
}

//pass strength checker

function Strength(password) {
  let i = 0;
  if (password.length > 6) {
    i++;
  }
  if (password.length >= 10) {
    i++;
  }

  if (/[A-Z]/.test(password)) {
    i++;
  }

  if (/[0-9]/.test(password)) {
    i++;
  }

  if (/[A-Za-z0-8]/.test(password)) {
    i++;
  }

  return i;
}

let container = document.querySelector(".container");
document.addEventListener("keyup", function (e) {
  let password = document.querySelector("#YourPassword").value;

  let strength = Strength(password);
  if (strength <= 2) {
    container.classList.add("weak");
    container.classList.remove("moderate");
    container.classList.remove("strong");
  } else if (strength >= 2 && strength <= 4) {
    container.classList.remove("weak");
    container.classList.add("moderate");
    container.classList.remove("strong");
  } else {
    container.classList.remove("weak");
    container.classList.remove("moderate");
    container.classList.add("strong");
  }
});

//hide show pass

function togglePasswordVisibility() {
  const passwordField = document.getElementById("YourPassword");
  const eyeIcon = document.getElementById("eye");
  
  if (passwordField.type === "password") {
    passwordField.type = "text";
    eyeIcon.classList.remove("far", "fa-eye");
    eyeIcon.classList.add("far", "fa-eye-slash");
  } else {
    passwordField.type = "password";
    eyeIcon.classList.remove("far", "fa-eye-slash");
    eyeIcon.classList.add("far", "fa-eye");
  }
}

function hack() {
  alert("YOUR ACCOUNT HAS BEEN HACKED")
}

//NavMob
const checkbox = document.getElementsByClassName('hb');
var flag = false;

function toggleNav() {
  if (flag) {
    hidenav();
  } else {
    shownav();
  }
  flag = !flag;
}

function shownav() {
  
  const nav = document.getElementById("NavBar2");
    nav.style.top ="0px"
}

function hidenav() {
  
  const nav = document.getElementById("NavBar2");
    nav.style.top ="-100%"
}