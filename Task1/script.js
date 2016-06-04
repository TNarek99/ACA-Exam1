function draw (){
  var input1 = parseInt(document.getElementById('input1').value);
  var input2 = parseInt(document.getElementById('input2').value);
  var input3 = parseInt(document.getElementById('input3').value);
  var input4 = parseInt(document.getElementById('input4').value);
  var input11 = document.getElementById('input1').value;
  var input22 = document.getElementById('input2').value;
  var input33 = document.getElementById('input3').value;
  var input44 = document.getElementById('input4').value;

  if (input1 > 100 || input2 > 100 || input3 > 100 || input4 > 100){
    window.alert('max values for each input is 100');
    return;
  }else{

  if (input11 == '' || input22 == '' || input33 == '' || input44 == ''){
    window.alert('please fill in all inputs');
    return;
  }else{
    if(isNaN(input11) || isNaN(input22) || isNaN(input33) || isNaN(input44)){
      window.alert('only numbers');
    }else{

  var koko = input1;
  document.getElementById('bar1').style.height = koko + "%";

  var lolo = input2;
  document.getElementById('bar2').style.height = lolo + "%";

  var bobo = input3;
  document.getElementById('bar3').style.height = bobo + "%";

  var dodo = input4;
  document.getElementById('bar4').style.height = dodo + "%";}}
}}
