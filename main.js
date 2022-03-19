console.log("Prueba exitosa");

const requestURL = 'https://filesstaticpulzo.s3.us-west-2.amazonaws.com/pulzo-lite/jsons/rushbet/native/1007806226.json';

const request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
    const data = request.response;
    console.log(data);
    valores(data);
  }


function valores(data){
    const var1 = document.querySelector('#var1');
    var1.innerHTML = data['valorLoc'];
    
    const var2 = document.querySelector('#var2');
    var2.innerHTML = data['valorEmp']
    
    const var3 = document.querySelector('#var3');
    var3.innerHTML = data['valorVis']
}

function verificar() {
    if (document.getElementById('argentina').checked) {
        var = getElementById
    }
}






