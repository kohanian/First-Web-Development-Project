var awesome = true;
var myFirebaseRef = new Firebase("https://html-site.firebaseio.com/");
console.log(myFirebaseRef);
function myFunction() {
	console.log("IT IS IN THE FUNCTION");
	var x = document.getElementById("Rainbow");
	x.style.fontSize = "90pt";
	if(awesome == true) {
		console.log("IN THE IF STATEMENT");
		x.style.color = "red";
		x.innerHTML = "RAINBOW RISING"
		awesome = false;
		console.log("is Running");
		myFirebaseRef.set({
  			title: "Hello World!",
 			author: "Firebase",
  			location: {
  				city: "San Francisco",
   		        state: "California",
    	   	    zip: 94103
            }
        });
        console.log("it ran");
	}
	else {
		x.style.color = "#974700";
		x.innerHTML = "Kyle Ohanian"
		awesome = true;
	}
}
$(document  .ready(function(){
	$("button").click(function(){
		if(awesome == true) {
			$("h1").css("color","red");
			$("h1").html("Rainbow Rising!!!!");
			$("a").css("color","red");
			awesome = false;
		}
		else {
			$("h1").css("color","#974700");
			$("a").css("color","#974700");
			$("h1").html("Kylito Ohanman");
			awesome = true;
		}
	});
});