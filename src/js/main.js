import "../sass/styles.sass";
import logo from "../assets/logo.svg";

const logoImg = document.createElement("img");
logoImg.src = logo;

document.onreadystatechange = () => {
  const elements = document.getElementsByClassName("logo");
  for (const el of elements) {
    el.appendChild(logoImg);
  }
};
