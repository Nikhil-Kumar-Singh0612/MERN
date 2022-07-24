const eye = document.querySelector(".eye");
const eye1 = document.querySelector(".eye1");
const currentInputType = document.querySelector(".current-password");
const confirmInputType = document.querySelector(".confirm-password");

const toggleType = () => {
  let status = currentInputType.getAttribute("type");

  if (status === "password") {
    currentInputType.setAttribute("type", "text");
    eye.classList.remove("unfade");
    eye.classList.add("fade");
  } else {
    currentInputType.setAttribute("type", "password");
    eye.classList.remove("fade");
    eye.classList.add("unfade");
  }
};

const toggleType1 = () => {
  let status1 = confirmInputType.getAttribute("type");

  if (status1 === "password") {
    confirmInputType.setAttribute("type", "text");
    eye1.classList.remove("unfade");
    eye1.classList.add("fade");
  } else {
    confirmInputType.setAttribute("type", "password");
    eye1.classList.remove("fade");
    eye1.classList.add("unfade");
  }
};

eye.addEventListener("click", toggleType);
eye1.addEventListener("click", toggleType1);
