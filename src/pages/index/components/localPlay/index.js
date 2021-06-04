import './ddwl.css'

import { getData } from "api/getData";
import render from "./ddwl-bd.art"

const url = "https://www.imooc.com/api/mall-PC/index/local_fun";
const ddwlEl=document.querySelector(".ddwl .bd")

getData(url).then(data=>{
    // console.log(data)
    ddwlEl.innerHTML=render(data)
    // console.log(data.items[0].url)
})