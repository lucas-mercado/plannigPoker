const socket = io();

var selectedCarts=[];

const selected=(value)=>{
    document.getElementById('cart').innerHTML=value;
    switch(value){
        case 'cafe': value=0;
        case '?': value=0;
        case '1/2': {value=parseFloat(0.5);}
        default: value=parseFloat(value)
    }
    selectedCarts.push(value)
    socket.emit('selected',value);
}

const join = () => {
    const username=document.getElementById('username');
    document.getElementById('username').setAttribute('disabled','disabled');
    document.getElementById('join').setAttribute('disabled','disabled');
    socket.emit('join',username.value);
}

const leave = () => {
    document.getElementById('join').removeAttribute("disabled");
    document.getElementById('username').value='';
    document.getElementById('username').removeAttribute("disabled");
    socket.emit('leave');
}

const remove = () => {
    document.getElementById('cart').innerHTML='';
    selectedCarts=[];
}

const calcular = () => {
    if(selectedCarts.length > 0){
        const result = selectedCarts.reduce((a,b) => a + b) / selectedCarts.length;
        document.getElementById('promedio').innerHTML=result;
    }
}

socket.on('push',(value) => selectedCarts.push(value));