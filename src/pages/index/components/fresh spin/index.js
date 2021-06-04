import './xxsw.css';
import {getData} from 'api/getData';

import render from './xxsw-bd.art'

const url = "https://www.imooc.com/api/mall-PC/index/seckill";
const xxswEL=document.querySelector('.xxsw .bd')

getData(url).then(data=>{
    // console.log(data)
    xxswEL.innerHTML=render({
        item:data
     })
});