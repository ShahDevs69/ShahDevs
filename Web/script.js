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

//CART

const btnCart = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const btnClose = document.querySelector("#cart-close");

btnCart.addEventListener("click", () => {
  cart.classList.add("cart-active");
  const btttn = document.querySelector(".hamburger");
  btttn.style.transition = "0.3s ease";
  btttn.style.display = "none"
});

btnClose.addEventListener("click", () => {
  cart.classList.remove("cart-active");
  const btttn = document.querySelector(".hamburger");
  btttn.style.transition = "0.3s ease";
  btttn.style.display = "flex";
});

document.addEventListener("DOMContentLoaded", loadFood);

function loadFood() {
  loadContent();
}

function loadContent() {
  //Remove Food Items  From Cart
  let btnRemove = document.querySelectorAll(".cart-remove");
  btnRemove.forEach((btn) => {
    btn.addEventListener("click", removeItem);
  });

  //Product Item Change Event
  let qtyElements = document.querySelectorAll(".cart-quantity");
  qtyElements.forEach((input) => {
    input.addEventListener("change", changeQty);
  });

  //Product Cart

  let cartBtns = document.querySelectorAll(".add-cart");
  cartBtns.forEach((btn) => {
    btn.addEventListener("click", addCart);
  });

  updateTotal();
}

//Remove Item
function removeItem() {
  if (confirm("Are Your Sure You wanna Remove")) {
    let title = this.parentElement.querySelector(".cart-food-title").innerHTML;
    itemList = itemList.filter((el) => el.title != title);
    this.parentElement.remove();
    loadContent();
  }
}

//Change Quantity
function changeQty() {
  if (isNaN(this.value) || this.value < 1) {
    this.value = 1;
  }
  loadContent();
}

let itemList = [];

//Add Cart
function addCart() {
  let food = this.parentElement;
  let title = food.querySelector(".food-title").innerHTML;
  let price = food.querySelector(".food-price").innerHTML;
  let imgSrc = food.querySelector(".food-img").src;
  //console.log(title,price,imgSrc);

  let newProduct = { title, price, imgSrc };

  //Check Product already Exist in Cart
  if (itemList.find((el) => el.title == newProduct.title)) {
    alert("Product is Already in the Cart");
    return;
  } else {
    itemList.push(newProduct);
  }

  let newProductElement = createCartProduct(title, price, imgSrc);
  let element = document.createElement("div");
  element.innerHTML = newProductElement;
  let cartBasket = document.querySelector(".cart-content");
  cartBasket.append(element);
  loadContent();
}

function createCartProduct(title, price, imgSrc) {
  return `
  <div class="cart-box">
    <img src="${imgSrc}" class="cart-img">
      <div class="detail-box">
       <div class="cart-food-title">${title}</div>
         <div class="price-box">
          <div class="cart-price">${price}</div>
          <div class="cart-amt">${price}</div>
       </div>
      <input type="number" value="1" class="cart-quantity">
     </div>
    <ion-icon name="trash" class="cart-remove"></ion-icon>
  </div>
  `;
}

function updateTotal() {
  const cartItems = document.querySelectorAll(".cart-box");
  const totalValue = document.querySelector(".total-price");

  let total = 0;

  cartItems.forEach((product) => {
    let priceElement = product.querySelector(".cart-price");
    let price = parseFloat(priceElement.innerHTML.replace("$", ""));
    let qty = product.querySelector(".cart-quantity").value;
    total += price * qty;
    product.querySelector(".cart-amt").innerText = "$" + price * qty;
  });

  totalValue.innerHTML = "$" + total;

  // Add Product Count in Cart Icon

  const cartCount = document.querySelector(".cart-count");
  let count = itemList.length;
  cartCount.innerHTML = count;

  if (count == 0) {
    cartCount.style.display = "none";
  } else {
    cartCount.style.display = "block";
  }
}

const btnBuy = document.getElementById("btn-buy")
function alt(){
  alert("COLLEGE AA KR PAISY LOON GA")
}

//CAROSEL

document.addEventListener('DOMContentLoaded', () => {
  
  //------ Slider Begin
	const CaroS = document.querySelector('.Carousel-slider');
	const CaroSlider = new MicroSlider(CaroS, { indicators: true, indicatorText: '' });
	const hammer = new Hammer(CaroS);
	const CaroSTimer = 1500;
	let CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
    
  //------- Mouseenter Event
	CaroS.onmouseenter = function(e) {
		clearInterval(CaroAutoplay); 
		console.log(e.type + ' mouse detected');
	}
  
  //----- Mouseleave Event
	CaroS.onmouseleave = function(e) {
		clearInterval(CaroAutoplay); 
		CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
		console.log(e.type + ' mouse detected');
	}
  
  //----- Mouseclick Event
	CaroS.onclick = function(e) {
		clearInterval(CaroAutoplay); 
		console.log(e.type + ' mouse detected');
	}
  
  //------ Gesture Tap Event
	hammer.on('tap', function(e) {
		clearInterval(CaroAutoplay);
		console.log(e.type + ' gesture detected');
	});
  
  //----- Gesture Swipe Event
	hammer.on('swipe', function(e) {
		clearInterval(CaroAutoplay); 
		CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
		console.log(e.type + ' gesture detected');
	});

  let slideLink = document.querySelectorAll('.slider-item');
  if (slideLink && slideLink !== null && slideLink.length > 0){
    slideLink.forEach( el => el.addEventListener('click', e => {
      e.preventDefault();
      let href = el.dataset.href;
      let target = el.dataset.target;
      if (href !== '#') window.open(href, target);
    }));
  }
  
  //---- Slider End
  
});


//scroll 

function scrollToBottom() {
  window.scroll(0, 720)
}

function scrollToTop() {
  window.scroll(0, 0)
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


function order() {
  let result = confirm("Are you sure you wanna Subscribe?");
  if (result) {
    alert("COLLEGE AA KAAR POUCHTA TUJHAY");
  } else {
    alert("SILLY ASF");
  }
}
