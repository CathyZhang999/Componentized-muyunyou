import "./slider.css";
import "./btn.css";

import Slider from "./module";
import { getData } from "api/getData";
import render from "./slider.art";

const layoutE1 = document.getElementById("slider-layout");

const url =
  "https://www.imooc.com/api/mall-PC/index/slider?icode=J41A678FF993BB218";

getData(url).then((data) => {
  layoutE1.innerHTML = render({
    items: data,
  });
  // console.log(data);
  

  const slider = new Slider(document.querySelector(".slider"), {
    initialIndex: 1,
    animation: true,
    // 切换速度，单位 ms
    speed: 300,
    // 自动切换，单位 ms
    autoplay: 1000,
  });

  const bannerEl = document.getElementById("banner");
  const leftbtnEl = document.getElementById("leftbtn");
  const rightbtnEl = document.getElementById("rightbtn");

  leftbtnEl.addEventListener(
    "click",
    () => {
      slider.prev();
    },
    false
  );
  rightbtnEl.addEventListener(
    "click",
    () => {
      slider.next();
    },
    false
  );

  bannerEl.addEventListener(
    "mouseenter",
    () => {
      slider.pause();
    },
    false
  );
  bannerEl.addEventListener(
    "mouseleave",
    () => {
      slider.autoplay();
    },
    false
  );
});
