/**
 * Created by Melissa on 22/06/2017.
 */

//alert("voilà");

/**var xhr = null;

function initXhr(){
  xhr = new XMLHttpRequest();
}
initXhr();

xhr.onreadystatechange = function(){
  if(xhr.readyState == 4 && xhr.status == 200) //xhr.status == 0 si ftp ou file
    maCallback(xhr.responseText); // ou maCallback(xhr.responseXML);
};

function maCallback(response){
  console.log(eval('(' + response + ')')["resultat"]);
  var h1 = document.createElement('h1');
  var text = document.createTextNode(eval('(' + response + ')')["resultat"]);
  h1.appendChild(text);
  document.body.appendChild(h1);
}

function onLoaded(){
  document.getElementById("req_get").addEventListener('click', sendReq1);
  document.getElementById("req_post").addEventListener('click', sendReq2);
  //var req_get = document.getElementById('req_get');
   //req_get.addEventListener('click',function(){
   //sendReq1();
   })

}


function sendReq1() {
  console.log("text");
  xhr.open("get", "/moncompte.js", true);
  xhr.send(null);
}

function sendReq2(){
  xhr.open("post", "/moncompte.js", true);
  xhr.setRequestHeader('Content-Type',"application/x-www-form-urlencoded");
  xhr.send("variable="+document.getElementById("post_txt").value);
}**/

$(document).ready(function() {

  var addressId = -1;

  $('#req_get').click(function () {
    $.post("/moncompte/test", function (data) {

      addressId = data.addresses[0].id;
      $('#result2').html(data.email);
      $.each(data.addresses, function(index, value){
        console.log('value');
        $('#result2').html($('#result2').html() + value.rue)

      });
    });
  });

  $('#set_address').click(function () {
    $.post("/address/" + addressId, {rue:"testsjjj"}, function (data) {
        alert(data);
    });
  });
});
