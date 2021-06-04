import {getData} from 'api/getData';

import render from './art/jjzyx-bd.art'
const jjzyxEl = document.querySelector(".jjzyx .bd");

const url =
  "https://www.imooc.com/api/mall-PC/index/self_guided_tour?icode=J41A678FF993BB218";

getData(url).then(data=>{
    // console.log(data)
    jjzyxEl.innerHTML=render(data)
})