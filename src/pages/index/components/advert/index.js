import './advert.css';
import { getData } from "api/getData";

import render from './advert.art';

const url = "https://www.imooc.com/api/mall-PC/index/ad";
 
const advert=document.getElementById('fav-ad')

getData(url).then((data) => {
//   console.log(data);
  advert.innerHTML = render({
    item: data,
  });
});