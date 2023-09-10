const express= require('express');
const cors=require('cors');
const app=express();
const nodemailer=require('nodemailer');
app.use(express.json());
app.use(cors());

enviarEmail= async(asunto,texto)=>{
   const config={
    host:'smtp.gmail.com',
    port:587,
    auth:{
        user:'jeanpierks6@gmail.com',
        pass: 'mgsmrhnrcrtlbeqw'
    }
   }
   const mensaje={
    from:'jeanpierks@gmail.con',
    to:'jeanpierks6@gmail.com',
    subject:asunto,
    text:texto
   }

   const transport=nodemailer.createTransport(config);
   const info= await transport.sendMail(mensaje);
   console.log('mensaje eniviado con exito');
}


app.get('/',(req,res)=>{
   res.send("hola que tal");
   console.log("respondiendo en el servidor");
})

app.post('/',(req,res)=>{
    const dato=req.body;
    const asunto=dato.asunto;
    const texto=`${dato.nombres}\n${dato.correo}\n${dato.telefono}\n${dato.mensaje}`;
    enviarEmail(asunto,texto);
})







app.listen(3000,()=>{
    console.log('Servidor corriendo ene le puertoo 3000');
});