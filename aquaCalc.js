'use strict';
var length1 = document.getElementById('length1');
var width1 = document.getElementById('width1');
var height1 = document.getElementById('height1');
var result = document.getElementById('result');
var form = document.getElementById('calc');

form.addEventListener('submit', function(ev){
     if(!height1.value || !width1.value) {
        alert('uzupełnij pola'); 
     } 
    else if(!length1.value || !width1.value){
        alert('uzupełnij pola');
    }
    else if(!height1.value || !length1.value){
        alert("uzupełnij pola");
    }
    else {
        
        var x = parseFloat(length1.value);
        var y = parseFloat(width1.value);
        var z = parseFloat(height1.value);
        
        var r = x * y * z;
        var aq = Math.round (r / 1000);
        
        result.innerHTML = "Pojemność akwarium wynosi: " + aq + " l";
        ev.preventDefault();
    }
                      
});