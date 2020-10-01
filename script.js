// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  console.log(password)
}

  function generatePassword(){
    // setting variable and collecting collecting information from user.
    var pLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.")
    alert("Must Choose at least one character type.")
    var lowerCase = confirm("Do you want to include lower case letters?")
    var upperCase = confirm("Do you want upper case letters?")
    var numbers = confirm("Do you want Numbers?")
    var spcChar = confirm("Do you want Special characters?")

    if(lowerCase===true && upperCase===true && numbers === true && spcChar === true){
      return generateP(pLength);
    }
    if(lowerCase === true && upperCase === false && numbers === false && spcChar === false){
      return generateP1(pLength);
    }
    if(lowerCase === true && upperCase === true && numbers === true && spcChar === false){
      return generateP2(pLength);
    }
    if(lowerCase === true && upperCase === true && numbers === false && spcChar === true){
      return generateP3(pLength);
    }
    if(lowerCase === true && upperCase === false && numbers === true && spcChar === true){
      return generateP4(pLength);
    }
    if(lowerCase === true && upperCase === true && numbers === false && spcChar === false){
      return generateP5(pLength);
    }
    if(lowerCase === true && upperCase === false && numbers === true && spcChar === false){
      return generateP6(pLength);
    }
    if(lowerCase === true && upperCase === false && numbers === false && spcChar === true){
      return generateP7(pLength);
    }
    if(lowerCase === false && upperCase === true && numbers === true && spcChar === true){
      return generateP8(pLength);
    }
    if(lowerCase === false && upperCase === true && numbers === true && spcChar === false){
      return generateP9(pLength);
    }
    if(lowerCase === false && upperCase === true && numbers === false && spcChar === true){
      return generateP10(pLength);
    }
    if(lowerCase === false && upperCase === true && numbers === false && spcChar === false){
      return generateP11(pLength);
    }
    if(lowerCase === false && upperCase === false && numbers === true && spcChar === true){
      return generateP12(pLength);
    }
    if(lowerCase === false && upperCase === false && numbers === true && spcChar === false){
      return generateP13(pLength);
    }
    if(lowerCase === false && upperCase === false && numbers === false && spcChar === true){
      return generateP14(pLength);
    }
  }

  function generateP(pLength) { 
    var pass = ''; 
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +  
            'abcdefghijklmnopqrstuvwxyz0123456789@#$!&'; 
      
    for (i = 1; i <= pLength; i++) { 
        var char = Math.floor(Math.random() 
                    * str.length + 1); 
          
        pass += str.charAt(char) 
    } 
      
    return pass; 
}
function generateP1(pLength) { 
  var pass = ''; 
  var str = 'abcdefghijklmnopqrstuvwxyz'; 
    
  for (i = 1; i <= pLength; i++) { 
      var char = Math.floor(Math.random() 
                  * str.length + 1); 
        
      pass += str.charAt(char) 
  } 
    
  return pass; 
}
function generateP2(pLength) { 
  var pass = ''; 
  var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +  
          'abcdefghijklmnopqrstuvwxyz0123456789'; 
    
  for (i = 1; i <= pLength; i++) { 
      var char = Math.floor(Math.random() 
                  * str.length + 1); 
        
      pass += str.charAt(char) 
  } 
    
  return pass; 
}
function generateP3(pLength) { 
  var pass = ''; 
  var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +  
          'abcdefghijklmnopqrstuvwxyz@#$!&'; 
    
  for (i = 1; i <= pLength; i++) { 
      var char = Math.floor(Math.random() 
                  * str.length + 1); 
        
      pass += str.charAt(char) 
  } 
    
  return pass; 
}
function generateP4(pLength) { 
  var pass = ''; 
  var str =  'abcdefghijklmnopqrstuvwxyz0123456789@#$!&'; 
    
  for (i = 1; i <= pLength; i++) { 
      var char = Math.floor(Math.random() 
                  * str.length + 1); 
        
      pass += str.charAt(char) 
  } 
    
  return pass; 
}
function generateP5(pLength) { 
  var pass = ''; 
  var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +  
          'abcdefghijklmnopqrstuvwxyz'; 
    
  for (i = 1; i <= pLength; i++) { 
      var char = Math.floor(Math.random() 
                  * str.length + 1); 
        
      pass += str.charAt(char) 
  } 
    
  return pass; 
}
function generateP6(pLength) { 
  var pass = ''; 
  var str =  'abcdefghijklmnopqrstuvwxyz0123456789'; 
    
  for (i = 1; i <= pLength; i++) { 
      var char = Math.floor(Math.random() 
                  * str.length + 1); 
        
      pass += str.charAt(char) 
  } 
    
  return pass; 
}
function generateP7(pLength) { 
  var pass = ''; 
  var str = 'abcdefghijklmnopqrstuvwxyz@#$!&'; 
    
  for (i = 1; i <= pLength; i++) { 
      var char = Math.floor(Math.random() 
                  * str.length + 1); 
        
      pass += str.charAt(char) 
  } 
    
  return pass; 
}
function generateP8(pLength) { 
  var pass = ''; 
  var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +  
          '0123456789@#$!&'; 
    
  for (i = 1; i <= pLength; i++) { 
      var char = Math.floor(Math.random() 
                  * str.length + 1); 
        
      pass += str.charAt(char) 
  } 
    
  return pass; 
}
function generateP9(pLength) { 
  var pass = ''; 
  var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +  
          '0123456789'; 
    
  for (i = 1; i <= pLength; i++) { 
      var char = Math.floor(Math.random() 
                  * str.length + 1); 
        
      pass += str.charAt(char) 
  } 
    
  return pass; 
}
function generateP10(pLength) { 
  var pass = ''; 
  var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +  
          '@#$!&'; 
    
  for (i = 1; i <= pLength; i++) { 
      var char = Math.floor(Math.random() 
                  * str.length + 1); 
        
      pass += str.charAt(char) 
  } 
    
  return pass; 
}
function generateP11(pLength) { 
  var pass = ''; 
  var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
    
  for (i = 1; i <= pLength; i++) { 
      var char = Math.floor(Math.random() 
                  * str.length + 1); 
        
      pass += str.charAt(char) 
  } 
    
  return pass; 
}
function generateP12(pLength) { 
  var pass = ''; 
  var str = '0123456789@#$!&'; 
    
  for (i = 1; i <= pLength; i++) { 
      var char = Math.floor(Math.random() 
                  * str.length + 1); 
        
      pass += str.charAt(char) 
  } 
    
  return pass; 
}
function generateP13(pLength) { 
  var pass = ''; 
  var str = '0123456789'; 
    
  for (i = 1; i <= pLength; i++) { 
      var char = Math.floor(Math.random() 
                  * str.length + 1); 
        
      pass += str.charAt(char) 
  } 
    
  return pass; 
}
function generateP14(pLength) { 
  var pass = ''; 
  var str = '@#$!&'; 
    
  for (i = 1; i <= pLength; i++) { 
      var char = Math.floor(Math.random() 
                  * str.length + 1); 
        
      pass += str.charAt(char) 
  } 
    
  return pass; 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
