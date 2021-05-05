const entrada = document.getElementById("novat");
const adicionart = document.getElementById("addt");

const mesa = document.getElementById("incompletas");
var areaTask = document.querySelector("table");
areaTask.appendChild(mesa)


function criarElemento(){
  var cTask = document.createElement("li");
  cTask.setAttribute("class" , "elemento")
  var checkBox = document.createElement("input");
  mesa.appendChild(cTask);
  var val = document.createElement("label");


  val.innerText = entrada.value;
  cTask.appendChild(val);
  cTask.style.listStyle = "none";
  checkBox.setAttribute("type", "checkbox");
  checkBox.setAttribute("class", "checkC");
  cTask.appendChild(checkBox);
  cTask.insertBefore(checkBox,val)

  var elementos = document.querySelectorAll(".elemento");

  checkBox.addEventListener("click", function(){feita()});
  val.addEventListener("click", function(){feita()});

  function feita(){
    var task = checkBox.parentElement;
    if(checkBox.checked == true){
    checkBox.onchange = checkBox.checked = false;
    val.style.opacity = "1"
    val.style.textDecoration = "none"
  } else {
    checkBox.onchange = checkBox.checked = true;
    val.style.opacity = "0.5"
    val.style.textDecoration = "line-through"
    mesa.appendChild(task)
    
  }
}
  if(val.innerText == ''){
  var area = document.getElementById("alertArea");
  cTask.remove();
  entrada.style.border = "solid red 1px"
  var alerta1 = document.createElement('span');
  alerta1.innerText = "Você precisa digitar algo.";
  alerta1.style.color = "red"
  area.appendChild(alerta1)
  setTimeout(function(){ entrada.style.border = "solid black 1px"; }, 1000)
  setTimeout(function(){ alerta1.remove(); }, 1000)
  entrada.focus();
  } 
  if(elementos.length == 11){
    var area = document.getElementById("alertArea");
    cTask.remove();
    var alerta2 = document.createElement('h4');
    alerta2.innerText = "Limite máximo de 10 tarefas.";
    alerta2.style.color = "red"
    area.appendChild(alerta2)
    setTimeout(function(){ alerta2.remove(); }, 1000);
  } 


  var apagar = document.createElement("p");
  apagar.innerText = "x"
  cTask.appendChild(apagar)
  cTask.insertBefore(val, apagar)
  apagar.style.fontSize = "19px"
  apagar.style.margin = "0px"
  apagar.setAttribute("class", "apaga")

  apagar.addEventListener("click", function(){apagarElemento()});

  function apagarElemento() {
    apagar.parentElement.remove();
  }
  entrada.value = '';


 var teste = document.querySelectorAll('span');
 var teste2 = document.querySelectorAll('h4');


if(teste.length >= 2){
  alerta1.remove();
} 
if(teste2.length >= 2 & alerta2 != undefined){
  alerta2.remove();
}

  
}


adicionart.addEventListener("click", function(){criarElemento()});

