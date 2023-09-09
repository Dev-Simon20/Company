const header_ht = document.querySelector("header");
const form=document.querySelector('form');
import { header } from "./head.js";
const respuesta = header("../img/fk.png");
header_ht.innerHTML = respuesta;


form.addEventListener("submit",(event) => {
    event.preventDefault();
    const nombre = document.querySelector("#nombre");
    const empresa = document.querySelector("#empresa");
    const correo = document.querySelector("#correo");
    const telf = document.querySelector("#num");
    const mensaje = document.querySelector("#mens");
    console.log(nombre.value,empresa.value,correo.value,telf.value,mensaje.value);
    nombre.value='';
    empresa.value='';
    correo.value='';
    telf.value='';
    mensaje.value='';
  });
const header_ht=document.querySelector('header');
import {header} from './head.js';
const respuesta=header('../img/fk.png');
header_ht.innerHTML=respuesta;
 

