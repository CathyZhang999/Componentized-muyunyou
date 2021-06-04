import { getData } from "api/getData";

import render from "./zsj-bd.art";

const url = "https://www.imooc.com/api/mall-PC/index/special_subject";
const zsjEL = document.querySelector(".zsj .bd");

getData(url).then((data) => {
//   console.log(data)
  zsjEL.innerHTML = render(data,
  );
});
