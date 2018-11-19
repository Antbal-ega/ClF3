page("Home");
function page(name){
	var hp = document.getElementsByClassName("homePages");
	for(var i = 0; i<hp.length; i++){
		hp[i].style.display = "none";
	}
	document.getElementById(name).style.display = "block";
	console.log(name);
}
function pop(name){
	document.getElementById(name).style.display = "block";
}
function x(name){
	document.getElementById(name).style.display = "none";
}
function section(name){
	
}
