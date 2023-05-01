//your JS code here. If required.

document.getElementById("submit").addEventListener('click',myFunc);
document.getElementById("existing").addEventListener('click',exisFunc);

function exisFunc(){
	let name = JSON.parse(localStorage.getItem("username"));
	alert(`Logged in as ${name}`);
}

function myFunc(){
	let username = document.getElementById("username").value;
	let pass = document.getElementById("password").value;
	let checkbox = document.getElementById("checkbox").value;
	if(checkbox){
		if(username && pass){
		localStorage.setItem("username",JSON.stringify(username));
		localStorage.setItem("password",JSON.stringify(pass));
		alert(`Logged in as ${username}`);
		}
	}
	
}