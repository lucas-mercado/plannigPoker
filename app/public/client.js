const socket = io();

const selected=(value)=>{
    document.getElementById('cart').innerHTML=value;
    socket.emit("",()=>{},"");
}


//inicializo variables
//cart=[];
//document.getElementById('promedio').innerHTML='Promedio: '

//cart.push(value);
//cart.forEach(elem => document.getElementById('cart').innerHTML=elem)
//document.getElementById('promedio').innerHTML+=cart.reduce((a,b)=> a+b) / cart.length;