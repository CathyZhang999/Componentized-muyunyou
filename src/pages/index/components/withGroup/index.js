import {getData} from 'api/getData';

import render from './gt-bd.art'
const gtEl=document.querySelector('.gt .bd');
const url = "https://www.imooc.com/api/mall-PC/index/group_tour";

getData(url).then(data=>{
    // console.log(data)
    gtEl.innerHTML=render(data)
    // console.log(data.one['extra-tag']);

})