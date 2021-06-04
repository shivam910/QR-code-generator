let input = document.querySelector(".form input");
let button = document.querySelector(".form button");
let qrImg = document.querySelector(".qr-img img");

button.addEventListener("click",function(){
  let data = input.value;
  if(data.length > 0){
    let imgSrc = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="+data;
    qrImg.src = imgSrc;
  }
})