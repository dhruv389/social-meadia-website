// SIDE BAR
const menuItems = document.querySelectorAll(".menu-item");

//MESSAGES

const messagesNotification = document.querySelector("#messages-notification");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

// THEME
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");

//notifications-popup
const fontSizes = document.querySelectorAll(".choose-size span");
var root = document.querySelector(":root");
const colorpalette = document.querySelectorAll(".choose-color span");
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");

// ============================= SIDE BAR =================

//remove active class from all menu function
const changeActiveItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem();
    item.classList.add("active");
    if (item.id != "notifications") {
      document.querySelector(".notifications-popup").style.display = "none";
      document.querySelector(".middle").style.zIndex = "10000";
  
    } else {
      document.querySelector(".notifications-popup").style.zIndex = "10000";
      document.querySelector(".middle").style.zIndex = "-1000";
      document.querySelector(".photo").style.transform ='scale(none)' ;
      document.querySelector(".notifications-popup").style.display = "block";

    }
  });
});



//  ======================== MESSAGES ==================

// search
const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();

  message.forEach((chat) => {
    let name = chat.querySelector("h5").textContent.toLowerCase();
    console.log(name);

    if (name.indexOf(val) != -1) {
      chat.style.display = "flex";
    } else {
      chat.style.display = "none";
    }
  });
};

// //search input
messageSearch.addEventListener("keyup", searchMessage);

messagesNotification.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 2rem var(--color-primary)";
  messagesNotification.querySelector(".notification-count").style.display =
    "none";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});

// THEME / DISPLAY CUSTOMIZE
//open model
const openThemeModel = () => {
  themeModal.style.display = "grid";
};

// close model
const closeThemeModal = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  }
};

// // close model

themeModal.addEventListener("click", closeThemeModal);

theme.addEventListener("click", openThemeModel);

// ===================FONTS ====================

// remove active class from span
const removeSizeSelector = () => {
  fontSizes.forEach((size) => {
    size.classList.remove("active");
  });
};

fontSizes.forEach((size) => {
  size.addEventListener("click", () => {
    removeSizeSelector();
    let fontSize;
    size.classList.toggle("active");

    if (size.classList.contains("font-size-1")) {
      fontSize = "10px";
      root.style.setProperty("----sticky-top-left", "5.4rem");
      root.style.setProperty("----sticky-top-right", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "13px";
      root.style.setProperty("----sticky-top-left", "5.4rem");
      root.style.setProperty("----sticky-top-right", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.style.setProperty("----sticky-top-left", "-2rem");
      root.style.setProperty("----sticky-top-right", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "19px";
      root.style.setProperty("----sticky-top-left", "-5rem");
      root.style.setProperty("----sticky-top-right", "-25rem");
    } else if (size.classList.contains("font-size-5")) {
      fontSize = "22px";
      root.style.setProperty("----sticky-top-left", "-10rem");
      root.style.setProperty("----sticky-top-right", "-35rem");
    }
    // change  font size of the root html element
    document.querySelector("html").style.fontSize = fontSize;
  });
});

//remove active class from colors
const changeActiveColorClass = () => {
  colorpalette.forEach((colorPicker) => {
    colorPicker.classList.remove("active");
  });
};

// change  primary colors
colorpalette.forEach((color) => {
  color.addEventListener("click", () => {
    let primaryHue;
    if (color.classList.contains("color-1")) {
      primaryHue = 252;
    } else if (color.classList.contains("color-2")) {
      primaryHue = 52;
    } else if (color.classList.contains("color-3")) {
      primaryHue = 352;
    } else if (color.classList.contains("color-4")) {
      primaryHue = 152;
    } else if (color.classList.contains("color-5")) {
      primaryHue = 202;
    }

    color.classList.add("active");
    root.style.setProperty("--primary-color-hue", primaryHue);
  });
});

//theme BACKGORUND values

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG = () => {
  root.style.setProperty("--light-color-lightness", lightColorLightness);
  root.style.setProperty("--white-color-lightness", whiteColorLightness);
  root.style.setProperty("--dark-color-lightness", darkColorLightness);
};

Bg1.addEventListener("click", () => {
  // add active class
  Bg1.classList.add("active");
  //remove active class from the others
  Bg3.classList.remove("active");
  Bg2.classList.remove("active");

  window.location.reload();
});

Bg2.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "20%";
  lightColorLightness = "15%";

  // add active class
  Bg2.classList.add("active");
  //remove active class from the others
  Bg1.classList.remove("active");
  Bg3.classList.remove("active");
  changeBG();
});

Bg3.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "10%";
  lightColorLightness = "0%";

  // add active class
  Bg3.classList.add("active");
  //remove active class from the others
  Bg1.classList.remove("active");
  Bg2.classList.remove("active");
  changeBG();
});






const cont = document.querySelector(".notifications-popup");

let x=6;


function dhaval(hd,na) {
  x++;


document.querySelector('.notification-count').innerHTML=x+'+';
  const currentTime = new Date();
const hours = currentTime.getHours();
const minutes = currentTime.getMinutes();
const seconds = currentTime.getSeconds();


  const newContentDiv = document.createElement("div");
  newContentDiv.classList.add("jk");
  const image = document.createElement("img");
  image.src = hd ;
  image.classList.add("pf");

  const paragraph = document.createElement("b");
  paragraph.textContent = na + " liked your Post";
  

  const boldText = document.createElement("small");
  boldText.textContent = `on ${hours}:${minutes}:${seconds}`;

  newContentDiv.appendChild(image);
  newContentDiv.appendChild(paragraph);
  newContentDiv.appendChild(boldText);
  console.log("hii");
  // Append the new content div to the container
  cont.prepend(newContentDiv);
}
