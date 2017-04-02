document.getElementById("users").onclick = function loadContent(users) {
	var request = new XMLHttpRequest();
	request.onreadystatechange = function () {
		//Check for request status
		switch (request.readyState) {
			//De-comment console.logs to check for server connection status
		case 0: //error
			alert("An error occurred. Try again later.");
			//console.log("Error: request not initialized");
			break;
		case 1:
			//console.log("request has been set up");
			break;
		case 2:
			//console.log("request has been sent");
			break;
		case 3:
			//console.log("request in process");
			document.getElementById("container").innerHTML = "<img src='../assets/loading.gif'";
			break;
		case 4: //success
			//console.log("DONE! Check the result!")
			var data = JSON.parse(request.response);
			//console.log(request.response);
			createHTML(data);
			break;
		}
	}
	var urlRoot = "https://jsonplaceholder.typicode.com/";
	request.open("GET", urlRoot + "users");
	request.send();
	//Handlebars function
	function createHTML(usersData) {
		//takes raw data
		var rawTemplate = document.getElementById("entry-template").innerHTML;
		//prepares raw data for html output
		var compiledTemplate = Handlebars.compile(rawTemplate);
		//takes all the users and put them in html
		for (i = 0; i < usersData.length; i++) {
			var currentUser = usersData[i];
			//controls how many elements are displaied at time
			if (i == 10) {
				break;
			} //attempted to add 5 to [i] to load 5 more elements on every click
			else if (i >= 10) {
				i + 5;
			}
			var handledHTML = compiledTemplate(currentUser);
			var container = document.getElementById("container");
			container.innerHTML += handledHTML;
		}
	}
}