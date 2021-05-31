let input = document.getElementById("item-input");
let btnAdicionar= document.getElementById("btnAdicionar"); 
let ul= document.getElementById("lista"); 
let items = document.getElementsByTagName("li");
let itemButtons = document.getElementsByClassName("remove");
let riscaItem = document.getElementsByClassName("riscaItem");
let contadorContainer = document.getElementById("contador");

contador = 0;

function gerarListaNova(){
  let li = document.createElement("li");
  let xButton = document.createElement("button");
  let quebra = document.createElement("hr");
  let risca = document.createElement("button");
  let divisao = document.createElement("div");
  let span = document.createElement("span");

  xButton.innerHTML = "-";
  xButton.className = "remove";
  divisao.className = "separador";
  quebra.className = "quebraLinha";
  risca.innerHTML = "✔️";
  risca.className = "riscaItem";
  span.className = "spanText"
  
  divisao.appendChild(xButton)

  let text = document.createTextNode(input.value);
  
  span.appendChild(text)
  divisao.appendChild(span);
  divisao.appendChild(risca);
  li.appendChild(divisao);
  li.appendChild(quebra);
  ul.appendChild(li);
  input.value = "";
  
  buttonEvents();
  buttonCheckEvents();
}
 
function deleteItem(){
 this.parentElement.parentElement.remove();
 contador -= 1;
 contadorContainer.textContent = contador;
}

function buttonEvents(){
  for(let i=0; i< itemButtons.length; i++){
    itemButtons[i].addEventListener("click",deleteItem);
  }
}

function buttonCheckEvents(){
  for(let i=0; i< riscaItem.length; i++){
    riscaItem[i].addEventListener("click",checkItem);
  }
}

input.addEventListener('keyup', function(e){
  var key = e.which || e.keyCode;
    if((key == 13) && (input.value!== "")){
      gerarListaNova();
      resultado.textContent=""
      input.style.border = "none";
      input.style.boxShadow = "none";
      contador += 1;
      contadorContainer.textContent = contador;
    }else if((key == 13) && (input.value=== "")){
      resultado.textContent="Campo obrigatório";
      input.style.border = "1px solid #D82E3D";
      input.style.boxShadow = "0 2px 5px #D82E3D";
    }});

btnAdicionar.addEventListener('click', function(e){
  if(input.value !== ""){
    gerarListaNova();
    resultado.textContent=""
    input.style.border = "none";
    input.style.boxShadow = "none";
    contador += 1;
    contadorContainer.textContent = contador;
  }else{
    resultado.textContent="Campo obrigatório";
    input.style.border = "1px solid #D82E3D";
    input.style.boxShadow = "0 2px 5px #D82E3D";
  }});

function checkItem(){
    this.parentElement.querySelector(".spanText").style.textDecoration = "line-through #D82E3D 2px";
    this.parentElement.querySelector(".spanText").style.textTransform= "uppercase";
    this.parentElement.querySelector(".spanText").style.fontFamily= "Squada One";
}

buttonEvents();
buttonCheckEvents();