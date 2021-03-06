
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


// content panels display settings
var addResButton = document.getElementById('addResButton');
var listResButton = document.getElementById('listResButton');
var addResContent = document.getElementById('addResContent');
var listResContent = document.getElementById('listResContent')

addResButton.onclick = function() {
	console.log(addResContent.style.display);
	if (listResContent.style.display == 'block'){
		listResContent.style.display = 'none'
	}
	addResContent.style.display === 'none' || addResContent.style.display === ''  ? addResContent.style.display = 'block' : addResContent.style.display = 'none';
}

listResButton.onclick = function() {
	if (addResContent.style.display == 'block'){
		addResContent.style.display = 'none'
	}
	listResContent.style.display == 'none' || listResContent.style.display == '' ? listResContent.style.display = 'block' : listResContent.style.display = 'none';
	loadAndDisplayListOfReservations();
}

function loadAndDisplayListOfReservations() {
    
    $('.message').hide();
    
    var reservationListTemplateSource = $("#reservation-list-template").html();      // get the template's html source
    var reservationListTemplate = Handlebars.compile(reservationListTemplateSource); // initialize Handlebars template

    $.ajax({
      url : "/api/reservations/",
      dataType : 'json',
      async : true, 
      cache : false,
      timeout : 5000, 

      data : {},
      success : function(response) {

        var h = reservationListTemplate(response);     // generate HTML from the object using the template
        $("#reservation-list").empty();
        $("#reservation-list").append(h);              // insert the generated HTML into the document
      },
      error : function(XMLHttpRequest, textStatus, errorThrown) {
        console.log("reservation list retrieval failed ... HTTP status code: " + XMLHttpRequest.status + ' message ' + XMLHttpRequest.responseText);
        $('#system-error').fadeIn();
      }
    });
}

function showPopUp() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
