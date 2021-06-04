import { getData } from "api/getData";
import "./js/menu.js";

import {
  url_menu2_hot,
  url_menu2_hk,
  url_menu2_japan,
  url_menu2_asia,
  url_menu2_eu,
  url_menu2_au,
} from "./js/config";


import render_sec_hot from "./art/sec_menu_hot.art";
import render_sec_hk from "./art/sec_menu_hk.art";
import render_sec_japan from "./art/sec_menu_japan.art";
import render_sec_asia from "./art/sec_menu_asia.art";
import render_sec_eu from "./art/sec_menu_eu.art";
import render_sec_au from "./art/sec_menu_au.art";

const secMenu_hot = document.getElementById("hot");
const secMenu_hk = document.getElementById("hk");
const secMenu_japan = document.getElementById("japan");
const secMenu_asia = document.getElementById("asia");
const secMenu_eu = document.getElementById("eu");
const secMenu_au = document.getElementById("au");

getData(url_menu2_hot).then((data) => {
  // console.log(data);
  secMenu_hot.innerHTML = render_sec_hot({
    hot: data,
  });
});
getData(url_menu2_hk).then((data) => {
  // console.log(data);
  secMenu_hk.innerHTML = render_sec_hk({
    hk: data,
  });
});
getData(url_menu2_japan).then((data) => {
  // console.log(data);
  secMenu_japan.innerHTML = render_sec_japan({
    japan: data,
  });
});
getData(url_menu2_asia).then((data) => {
  secMenu_asia.innerHTML = render_sec_asia({
    asia: data,
  });
});
getData(url_menu2_eu).then((data) => {
  secMenu_eu.innerHTML = render_sec_eu({
    eu: data,
  });
});
getData(url_menu2_au).then((data) => {
  secMenu_au.innerHTML = render_sec_au({
    au: data,
  });
});
