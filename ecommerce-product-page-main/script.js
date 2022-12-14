let navPhotos = document.querySelectorAll(".info #thumb");
let thumbPhotos = document.querySelectorAll(".thumbnails #thumb");
const popup = document.getElementById("popup");
const cart = document.getElementById("cartInfo");
let cartDisplay = false;
let photo = 1;
let mobilePhoto = 1;
var qtd = 1;
var bought = false;

const mobileNextPhoto = () => {
  if (mobilePhoto <= 3) {
    mobilePhoto++;
    document.getElementById("productImage").src =
      "/images/image-product-" + mobilePhoto + ".jpg";
  }
};

const mobilePreviousPhoto = () => {
  if (mobilePhoto > 1) {
    mobilePhoto--;
    document.getElementById("productImage").src =
      "/images/image-product-" + mobilePhoto + ".jpg";
  }
};

const showCart = () => {
  if (cartDisplay === false) {
    cart.style.display = "flex";
    cartDisplay = true;
  } else {
    cartDisplay = false;
    cart.style.display = "none";
  }
};

const openMenuOptions = () => {
  document.getElementById("mobileMenuChoices").style.display = "inline";
};

const closeMenuOptions = () => {
  document.getElementById("mobileMenuChoices").style.display = "none";
};

const openPopup = () => {
  if (window.innerWidth > 500) {
    popup.style.display = "flex";
    document.getElementById("photoDestaque").src =
      "/images/image-product-" + photo + ".jpg";
  }
};

const closePopup = () => {
  popup.style.display = "none";
};

navPhotos.forEach((li) => {
  li.addEventListener("click", () => {
    resetLinks();
    li.classList.add("active");
  });
});

const resetLinks = () => {
  navPhotos.forEach((li) => {
    li.classList.remove("active");
  });
};

thumbPhotos.forEach((li) => {
  li.addEventListener("click", () => {
    resetLinks2();
    li.classList.add("active");
  });
});

const resetLinks2 = () => {
  thumbPhotos.forEach((li) => {
    li.classList.remove("active");
  });
};

document.getElementById("quantityNumber").innerHTML = qtd;

const delItem = () => {
  document.getElementById("item").innerHTML =
    '<div id="item"><p>Your cart is empty.</p></div>';
  document.getElementById("cartQtd").style.display = "none";
};

const addToCart = () => {
  console.log(qtd);
  document.getElementById("cartQtd").style.display = "flex";
  document.getElementById("cartQtd").innerHTML = qtd;
  document.getElementById("notification").style.display = "flex";
  setTimeout(() => {
    document.getElementById("notification").style.display = "none";
  }, "5500");

  var price = qtd * 125.0;
  bought = true;
  if (bought === true) {
    var cartSelection = [
      `
      <div id="itemValor">
      <img class='cartThumbnail'src='/images/image-product-1.jpg' />
      <div id='stringInfo'>
        <p>Fall Limited Edition Sneakers</p>
        <div id='numInfo'>
          <p>$125.00</p>
          <p>x</p>
          <p>${qtd}<p>
          <p id="finalPrice"><b>R$${price}</b></p>
          </div>
        </div>
        <img src="/images/icon-delete.svg" style="aspect-ratio: 1/1; /*! height: 32%; */width: 6%;border-radius: 0px; cursor: pointer;" id="delItem" onclick="delItem()"> 
      </div>
      <div id="checkOut">
        Checkout
      </div>
      `,
    ];
    document.getElementById("item").innerHTML = cartSelection;
  }
};

const diminuir = () => {
  if (qtd <= 1) {
  } else {
    qtd--;
    document.getElementById("quantityNumber").innerHTML = qtd;
  }
};

const aumentar = () => {
  qtd++;
  document.getElementById("quantityNumber").innerHTML = qtd;
};

const changePhoto = (x) => {
  photo = x;
  document.getElementById("productImage").src =
    "/images/image-product-" + x + ".jpg";
  document.getElementById("photoDestaque").src =
    "/images/image-product-" + photo + ".jpg";
};
