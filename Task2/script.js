function count (){
  var num1 = document.getElementById('num1').value;
  var num2 = document.getElementById('num2').value;
  var selection = document.getElementById('selection');
  var result;

  if (num1 == '' || num2 == ''){
    window.alert('please enter numbers');
    return;
  } else{
    if(isNaN(num1) || isNaN(num2)){
      window.alert('only numbers');
    }else{

  switch (selection.value){
    case "sum":
        result = parseInt(num1) + parseInt(num2);
        document.getElementById('result').innerHTML = result;
      break;

    case "ext":
      result = parseInt(num1) - parseInt(num2);
      document.getElementById('result').innerHTML = result;
      break;

    case "mult":
      result = parseInt(num1) * parseInt(num2);
      document.getElementById('result').innerHTML = result;
      break;

    case "div":
      result = parseInt(num1) / parseInt(num2);
      document.getElementById('result').innerHTML = result;
      break;
  }}}
}
