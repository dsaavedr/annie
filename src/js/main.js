import Glide from "@glidejs/glide";

import "../sass/styles.sass";
import logo from "../assets/logo.svg";
import fbLogo from "../assets/fb_logo.svg";
import igLogo from "../assets/ig_logo.svg";
import ttLogo from "../assets/tt_logo.svg";

const logos = {
  annie: logo,
  fb: fbLogo,
  ig: igLogo,
  tt: ttLogo
};

document.onreadystatechange = () => {
  new Glide(".glide", {
    type: "carousel",
    perView: 3,
    autoplay: 3000,
    breakpoints: {
      800: {
        perView: 1
      }
    }
  }).mount();

  ["annie", "fb", "ig", "tt"].forEach(type => {
    const elements = document.getElementsByClassName(`${type}-logo`);
    [...elements].forEach(element => {
      const logoImg = document.createElement("img");
      logoImg.src = logos[type];
      element.appendChild(logoImg);
    });
  });
};
