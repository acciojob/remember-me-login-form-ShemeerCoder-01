//your JS code here. If required.
let checkbox = document.getElementById("checkbox");
function check(){
	if(checkbox.checked){
		checkbox.checked = false;
		localStorage.removeItem("username");
	    localStorage.removeItem("password");
		
	}else{
		checkbox.checked = true;
	}
}




document.getElementById("submit").addEventListener('click',myFunc);
document.getElementById("existing").addEventListener('click',exisFunc);
if(localStorage.getItem("username") && localStorage.getItem("password")){
	// document.getElementById("form").style.display = "none";
	document.getElementById("existing").style.display = "block";
}

function exisFunc(){
	let name = JSON.parse(localStorage.getItem("username"));
	alert(`Logged in as ${name}`);
}

function myFunc(){
	let username = document.getElementById("username").value;
	let pass = document.getElementById("password").value;
	if(checkbox.checked){
		if(username && pass){
		localStorage.setItem("username",JSON.stringify(username));
		localStorage.setItem("password",JSON.stringify(pass));
		}
	}else{
		alert(`Logged in as ${username}`);
	}
	
}