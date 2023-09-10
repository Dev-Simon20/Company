const header_ht = document.querySelector("header");
const form=document.querySelector('form');
import { header } from "./head.js";
const respuesta = header("../img/fk.png");
header_ht.innerHTML = respuesta;


form.addEventListener("submit",(event) => {
    event.preventDefault();
<<<<<<< HEAD
    const nombres = document.querySelector("#nombre");
    const asunto = document.querySelector("#empresa");
    const correo = document.querySelector("#correo");
    const telf = document.querySelector("#num");
    const mensaje = document.querySelector("#mens");
    let corpu={
      asunto:asunto.value,
      nombres:nombres.value,
      correo:correo.value,
      telefono:telf.value,
      mensaje:mensaje.value
    }
    let corpuJson=JSON.stringify(corpu);
    console.log(corpuJson);
    fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: corpuJson
    });

    nombres.value='';
    asunto.value='';
    correo.value='';
    telf.value='';
    mensaje.value='';
  });
=======
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
 

>>>>>>> 864961aa99d72997cac9eb18de397ff49035417a
