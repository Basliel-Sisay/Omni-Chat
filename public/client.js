const socket = io();
const input = document.querySelector("#input");
const send = document.querySelector("#send");
const messages = document.querySelector("#messageList");

send.addEventListener('click', function(){
  const message = input.value;
  if(message){
    socket.emit("Message", message);
    input.value= '';
  }
});
socket.on("Message", function(val){
   const list = document.createElement('li');
   list.textContent= val;
    messages.appendChild(list);
});
input.addEventListener('keydown', function(e){
    if(e.key ==='Enter'){
        const message = input.value;
        socket.emit("Message", message);
        input.value= '';
    }

});