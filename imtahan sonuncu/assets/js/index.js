const menyu=document.getElementById("menyu");
const altMenyu=document.getElementById("altMenyu")

menyu.addEventListener("click",function () {

altMenyu.classList.toggle("response")
    
})

const kartBasliq=document.querySelectorAll(".kart-basliq");


for (let i = 0; i < kartBasliq.length; i++) {
   fetch("https://restcountries.com/v3.1/all")
   .then(res=>res.json())
   .then(data=>{
    kartBasliq[i].src=data[i].flags.png;
   })
 
    
}

const olkeAdi=document.querySelectorAll(".olkeAdi");
console.log(olkeAdi);


for (let i = 0; i<olkeAdi.length; i++) {
    fetch("https://restcountries.com/v3.1/all")
    .then(res=>res.json())
    .then(data=>{
   
     olkeAdi[i].innerHTML=data[i].name.common;
    })
  
     
 }