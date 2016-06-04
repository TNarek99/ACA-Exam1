function check(){
  var firstName = document.getElementById('firstName').value;
  var secondName = document.getElementById('secondName').value;
  var email = document.getElementById('email').value;
  var year = document.getElementById('year').value;
  var day = document.getElementById('day').value;
  var isAt = false;
  var isDot = false;
  var atIndex;
  var dotIndex;

  if (firstName == '' || secondName == '' || email == '' || year == '' || day == ''){

    window.alert('please fill in all inputs');
    return;
  }else{
  if (firstName.length > 20){
    window.alert('Names should be no longer than 20 characters');
    document.getElementById('firstName').style.borderColor = 'red';
    return;
  }else{
    document.getElementById('firstName').style.borderColor = 'blue';
    if(secondName.length > 20){
      window.alert('Names should be no longer than 20 characters');
      document.getElementById('secondName').style.borderColor = 'red';
      return;
    }else{
      document.getElementById('secondName').style.borderColor = 'blue';
    if (isNaN(year)){
      document.getElementById('year').style.borderColor = 'red';
      window.alert('Year and Day inputs should be numbers');
      return;
    }else{
      document.getElementById('year').style.borderColor = 'blue';
      if(isNaN(day)){
        document.getElementById('day').style.borderColor = 'red';
        window.alert('Year and Day inputs should be numbers');
        return;
      }else{
        document.getElementById('day').style.borderColor = 'blue';
      if (parseInt(day) > 31 || parseInt(day) < 1){
        document.getElementById('day').style.borderColor = 'red';
        window.alert('Month days are between the range of 1 and 31');
        return;
      } else{
        document.getElementById('day').style.borderColor = 'blue';
        if (parseInt(year) > 2000){
          document.getElementById('year').style.borderColor = 'red';
          window.alert('Out social network has age restriction of users younger than 16 years old');
          return;
        }else{
          document.getElementById('year').style.borderColor = 'blue';
          if (parseInt(year) < 1900){
            document.getElementById('year').style.borderColor = 'red';
            window.alert('Maan you are reaally old. Is there any Wi-Fi in heavens?');
            return;
          }  else{
            document.getElementById('year').style.borderColor = 'blue';
            for (var i = 0; i < email.length; i++){
              if (email[i] == "@"){
                atIndex = i;
                isAt = true;
              }

              if (email [i] == "."){
                dotIndex = i;
                isDot = true;
              }
            }

            if ((dotIndex - atIndex) <= 1){
              document.getElementById('email').style.borderColor = 'red';
              window.alert('please enter valid email adress');
              return;
            }else{
              if (dotIndex == (email.length - 1) || atIndex == 0){
                document.getElementById('email').style.borderColor = 'red';
                window.alert('please enter valid email adress');
                return;
              }else{
              if(isAt == false || isDot == false){
                document.getElementById('email').style.borderColor = 'red';
                window.alert('please enter valid email adress');
                return;
              }else{
                document.getElementById('email').style.borderColor = 'blue';
                window.alert('registration went alright');
                return;
              }}
            }
          }
        }
      }
    }}
  }
}}}
