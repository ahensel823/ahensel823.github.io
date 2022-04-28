const re1=/e/g;
const re2=/i/g;
const re3=/a/g;
const re4=/o/g;
const re5=/u/g;
const txHeight = 45;
const tx = document.getElementsByTagName("textarea");
const button = document.querySelector('.control');
const textoE = document.getElementById('encriptar');
const textoD = document.getElementById('desencriptar');
const input = document.querySelector('.input');  
const a=[re1,re2,re3,re4,re5];
const b=["enter","imes","ai","ober","ufat"];
const resultado= [];

//Funciones encriptar/desencriptar
button.addEventListener("click",function(){
  let x=0;
  resultado[0]=input.value;   
while (x<a.length) {
    resultado[0]=resultado[0].replace(a[x],b[x]);    
    textoD.textContent=resultado[0];
    x=x+1;          
  }
});
button.addEventListener("click",function(){
  textoE.textContent=input.value;
});
//Funcion Toggle encriptar/desencriptar
(function () {
  [...document.querySelectorAll(".control")].forEach(button => {
      button.addEventListener("click", function() {
          document.querySelector(".active-btn").classList.remove("active-btn");
          this.classList.add("active-btn");
          document.querySelector(".active").classList.remove("active");
          document.getElementById(button.dataset.id).classList.add("active");
      })
  });
})();
//Textarea tamaño automatico  
for (let i = 0; i < tx.length; i++) {
  if (tx[i].value == '') {
    tx[i].setAttribute("style", "height:" + txHeight + "px;overflow-y:hidden;");
  } else {
    tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
  }
  tx[i].addEventListener("input", OnInput, false);
}
function OnInput(e) {
  this.style.height = "auto";
  this.style.height = (this.scrollHeight) + "px";
}
