//document.body.addEventListener("click", selection2);
var previousElement = null;

function initSelection () {
  document.body.addEventListener("click", selection2, false);
}
initSelection();


function selection(evt){
  if(evt.target.style.background == ""){
    evt.target.style.background = "#0cb175";
  }
  else{
    evt.target.style.background = "";
  }
}


function selection2(evt){
  if((evt.target.style.background == "#ca1717")||(evt.target.style.background == "#3f34ec")){
        evt.target.style.background = "";
        if(evt.target == previousElement){
        previousElement =null;
        }
  }
  else{
    console.log(evt.target.nodeName);
    if( evt.target.nodeName != "INPUT"){
      if(previousElement != null){
        previousElement.style.background = "#ca1717";
      }

      evt.target.style.background = "#3f34ec";
      previousElement = evt.target;
    }

  }

}

function insertB(element){
  console.log(previousElement);
   if(previousElement!= null){
      var para = document.createElement(element);
      var node = document.createTextNode(document.getElementById("toInsert").value);
      para.appendChild(node);
      var element = previousElement;
      previousElement.parentNode.insertBefore(para, previousElement);
   }
}




