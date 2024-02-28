console.log("conectado");
//importamos socket
const socket = io();

//para enviar mensajes del cliente al servidor, utilizamos la palabra "emit", con el id
//del evento y el contenido del mensaje

//los ids de los eventos deben coincidir entre el cliente y el servidor

socket.emit("mensaje", "hola mundo, soy el cliente");

//recibimos el mensaje del servidor

socket.on("saludo", (data) => {
    console.log(data);
})