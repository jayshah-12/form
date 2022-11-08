function userNameInput () {
    var tagline = document.getElementById('tagline').value;
    var address = document.getElementById('address').value;
    var delivery = document.getElementById('delivery').value;
    var result = document.getElementById('result');
  
    if (tagline.length < 3) {
         result.textContent = 'Tag line must contain at least 3 characters';
         //alert('tagline must contain at least 3 characters');
     } else {
         result.textContent = 'Your tagline is: ' + tagline + ' and your delivery address is ' + address + 'It will be delivered to you by ' + delivery;
         //alert(nameField);
     }
  }
  
  submitButton.addEventListener('click', userNameInput, false);
  