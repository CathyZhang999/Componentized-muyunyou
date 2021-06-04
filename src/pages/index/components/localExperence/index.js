import "./tsddty.css"

import { getData } from "api/getData";
import render from "./tsddty-bd.art";

const url = "https://www.imooc.com/api/mall-PC/index/local_exp";
const tsddtyEl = document.querySelector(".tsddty .bd");

getData(url).then((data) => {
//   console.log(data);
    tsddtyEl.innerHTML = render({
        items:data
    });

});