"use strict";



var popUp = document.querySelector(".popup"),
    btnOpen = document.querySelectorAll(".btn--popup"),
    btnClose = document.querySelectorAll(".btn--close"),
    form = popUp.querySelector(".popup__form"),
    username = popUp.querySelector("#name"),
    email = popUp.querySelector("#email"),
    message = popUp.querySelector("#message"),
    storageName = localStorage.getItem("username"),
    storageEmail = localStorage.getItem("email");

for (var i = 0; i < btnOpen.length; i++){
  btnOpen[i].addEventListener("click", function(event){
    event.preventDefault();
    popUp.classList.add("popup--opened");
    if(storageName){
      username.value = storageName;
      email.focus();
      if(storageEmail){
        email.value = storageEmail;
        message.focus();
      }
    } else {
      username.focus();
    }
  });
}

for (var i = 0; i < btnClose.length; i++){
  btnClose[i].addEventListener("click", function(event){
    event.preventDefault();
    popUp.classList.remove("popup--opened");
  });
}

form.addEventListener("submit", function(){
  if(!username.value || !email.value  || !message.value){
    event.preventDefault();
  } else {
    localStorage.setItem("username", username.value);
    localStorage.setItem("email", email.value);
  }
});

window.addEventListener("keydown", function(event){
  if(event.keyCode == 27){
    if(popUp.classList.contains("popup--opened")){
      popUp.classList.remove("popup--opened");
    }
  }
});



function initMap(){
  var map = new google.maps.Map(document.getElementById("map"),{
    center: {lat: 59.939653, lng: 30.314408},
    scrollwheel: false,
    zoom: 14,
    mapTypeControl: false
  });
}