
let re1=/e/g;
let re2=/i/g;
let re3=/a/g;
let re4=/o/g;
let re5=/u/g;

const button = document.querySelector('.control');
const textoE = document.getElementById('encriptar');
const textoD = document.getElementById('desencriptar');
const input = document.querySelector('.input');
input.focus();
  
let a=[re1,re2,re3,re4,re5];
let b=["enter","imes","ai","ober","ufat"];
const resultado= [];
let x=0;

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

  button.addEventListener("click",function(event){
    resultado[0]=input.value; 
  while (x<a.length) {
      resultado[0]=resultado[0].replace(a[x],b[x]);    
      textoD.textContent=resultado[0];
      x=x+1;          
    }
  });

  button.addEventListener("click",function(event){
    textoE.textContent=input.value;
  });

  const txHeight = 45;
  const tx = document.getElementsByTagName("textarea");
  
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
