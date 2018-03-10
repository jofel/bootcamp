var video = document.getElementById("myVideo");
var btn = document.getElementById("videoButton");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.children[0].classList.remove('fa-play');
    btn.children[0].classList.add('fa-pause');
  } else {
    video.pause();
    btn.children[0].classList.remove('fa-pause');
    btn.children[0].classList.add('fa-play');
  }
}

//Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var modalButton = document.getElementById("modalButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
//modalButton.onclick = function() {
//    modal.style.display = "block";
//}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var addResButton = document.getElementById('plus');
var link = document.getElementById('addResContent');

addResButton.onclick = function() {
	link.style.display == 'none' ? link.style.display = 'block' : link.style.display = 'none';
//	link.style.visibility = 'hidden';
}


