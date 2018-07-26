/*
    app.js for the client
*/
var signUpmodal; 
var modal;
let port = 3000;
window.onload = function () {
  // get navbar html fragment
  setNavbar();

  document.getElementById('SubmitComment').addEventListener('click',newComment );

  // Get the SignUpmodal
var signUpmodal = document.getElementById('id01');


  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  if(this.document.contains(document.getElementById("commentBtn"))){
  var btn = document.getElementById("commentBtn");
  }
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal 
  btn.onclick = function () {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

// When the user clicks anywhere outside of the modal, close it
//window.onclick = function(signupevent) {
  //if (signupevent.target == signUpmodal) {
    //  signUpmodal.style.display = "none";
  //}
//}


var nav = null;
function setNavbar() {
  let navbar = document.getElementById('topnav');

  fetch(`http://localhost:${port}/pages/navbar.html`) // template literal w/ ` ` allows to insert variables inside of ${ variable }
    .then((resp) => {
      console.log(resp);
      nav = resp;
      return resp.text(); // getting html not json!
    })
    .then((text) => {
      console.log(text);
      navbar.innerHTML = text;
    })
}
}

// can't use window.onload again as it is used in the app.js, reference at bottom instead
let DBurl = 'http://localhost:3000/DComment';

function newComment(){
    
    let comment = document.getElementById('ADDComment').value;
    let userName = document.getElementById('userNameComment').value;
    
    // Post data!
    let data = {
        "userName": userName,
        "comment": comment
    }

    fetch(DBurl, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}! Must be converted to JSON
        headers:{
          'Content-Type': 'application/json'
        }
    }).then(data=> data.json()).then(q => {
            console.log(q);
      
    });
    
      location.reload(true);

}




function myRating1() {
  // get the clock 
  var myRating1 = document.getElementById('rating1');

  // get the current value of the clock's display property 
  var displaySetting = myRating1.style.display;

  // also get the clock button, so we can change what it says 
  var buttonRating = document.getElementById('buttonRating1');

  // now toggle the clock and the button text, depending on current state
  if (displaySetting == 'block') {
    // clock is visible. hide it
    myRating1.style.display = 'none';
    // change button text
    buttonRating.innerHTML = 'Show Rating';
  }
  else {
    // clock is hidden. show it 
    myRating1.style.display = 'block';
    // change button text
    buttonRating.innerHTML = 'Hide Rating';
  }
}

var allComments = null;
callComments();

function callComments(){
    fetch(DBurl)
    .then((resp) => {
        return resp.json();
    })
    .then((data)=> {
        console.log(data);
        allComments = data;
        printComments(allComments);
    })
}


function printComments(coolComments){
    console.log('setting comments to page');
    console.log(coolComments);
    var commentsSection = document.getElementById('coolComments');
    
    for(let x = 0;x < coolComments.length; x++){
        let coolCommentsDiv = document.createElement('div');
        coolCommentsDiv.innerHTML = coolComments [x].userName + ": "  + coolComments [x].comment
        commentsSection.appendChild(coolCommentsDiv);
    }
}

function myRating2() {
  // get the clock 
  var myRating2 = document.getElementById('rating2');

  // get the current value of the clock's display property 
  var displaySetting = myRating2.style.display;

  // also get the clock button, so we can change what it says 
  var buttonRating = document.getElementById('buttonRating2');

  // now toggle the clock and the button text, depending on current state
  if (displaySetting == 'block') {
    // clock is visible. hide it
    myRating2.style.display = 'none';
    // change button text
    buttonRating.innerHTML = 'Show Rating';
  }
  else {
    // clock is hidden. show it 
    myRating2.style.display = 'block';
    // change button text
    buttonRating.innerHTML = 'Hide Rating';
  }
}


function myRating3() {
  // get the clock 
  var myRating3 = document.getElementById('rating3');

  // get the current value of the clock's display property 
  var displaySetting = myRating3.style.display;

  // also get the clock button, so we can change what it says 
  var buttonRating = document.getElementById('buttonRating3');

  // now toggle the clock and the button text, depending on current state
  if (displaySetting == 'block') {
    // clock is visible. hide it
    myRating3.style.display = 'none';
    // change button text
    buttonRating.innerHTML = 'Show Rating';
  }
  else {
    // clock is hidden. show it 
    myRating3.style.display = 'block';
    // change button text
    buttonRating.innerHTML = 'Hide Rating';
  }
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(signupevent) {
  if (signupevent.target == signUpmodal) {
      signUpmodal.style.display = "none";
  }
}

var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}