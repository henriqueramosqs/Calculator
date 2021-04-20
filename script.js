var n1=0
var n2=0
var stored=0
var isFirstNumber = true
var isOn = false
const visor = document.getElementById("visor");
const algarismos = document.querySelectorAll(".algarismo")
/* chamei de "operador2n" aquelas operações que precisam de 2 números para fazerem sentido.
 Tal como é a soma e como não é a radiciação*/ 
const operador2n = document.querySelectorAll(".operador2n")
const equals  = document.getElementById("equals")
var operação

visor.innerText = n1;

operador2n.forEach(item =>{
    item.addEventListener("click", () =>{
       n2 =0;
       visor.innerText = n2;
       isFirstNumber = false;
       operação = ValorDoAlvo(event).id
    })
})

algarismos.forEach( item =>{
    item.addEventListener("click",() =>{
       if(isOn ===true){
           switch(isFirstNumber){
               case true:
                   n1 = (10*n1) + parseInt(ValorDoAlvo(event).innerText)
                   mostrarResultado(n1);
                   break;
               case false: 
                   n2 = (10*n2) + parseInt(ValorDoAlvo(event).innerText)
                   mostrarResultado(n2);
                   break;
           }
        }
   })
})

equals.addEventListener("click", ()=>{
   switch (operação) {
       case 'minus':
           n1 = n1-n2
           break;
       case 'plus':
           n1 = n1+n2;
           break;
       case 'times':
           n1 = n1*n2;
           break;
       case 'divide':
           n1= n1/n2;
           break;
       default: 
           n1 = 0;
           break;
   }
   mostrarResultado(n1)
})

document.querySelector("#mrc").addEventListener("click",()=>{
   visor.innerText = stored
})

document.querySelector("#mrc").addEventListener("dblclick",()=>{
   stored =0
   visor.innerText = stored
})


function ValorDoAlvo(event){
     return event.currentTarget
}

function CE(){
    n1 =0;
    n2= 0;
    stored = 0;
    isFirstNumber =true;
    visor.innerText =n1;
}

function OnOff(){
    CE();
    if(isOn == true){
       visor.style.color ="#DADEF2"
   }else{
       visor.style.color ="#4D4DFF"
   }    
   isOn = !isOn
}
function Mplus(){
    stored += n1
    n1=0
    visor.innerText =0
}
 
function Mminus(){
    stored -=n1
    n1=0
    visor.innerText =0
}

function raizQuadrada(){
    n1 = Math.sqrt(n1)
    mostrarResultado(n1)
}
/* Sabendo que o espaço do visor comporta números com no máximo 10 algarismos,
 o cógido abaixo atuliza o valor na tela ajustando a precisão do resultado caso
 este tenha muitas casas, arredondando números pequenos e apresentando números 
 maiores que 10^10 aproximando para a forma a*10^b*/
function mostrarResultado(number){
    if((Number.isInteger(number)==false)&&(String(number).length >10)){
        x = String(number).slice(0,10)
        visor.innerText = x
    }else if((Number.isInteger(number)==true)&&(String(number).length >10)){
       var pot = 10
       while(number/Math.pow(10,pot)>1){
           pot++
       }
       pot--
       x = String(number).slice(0, 9 -String(pot).length)
       visor.innerText = x+"e"+pot
       console.log('caso2')
    }else{
        visor.innerText = number
    }
}

function plusMinus(){
    n1=-n1
   mostrarResultado(n1)
}
