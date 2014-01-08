var drawWindow = function(canvas){
	var ctx = canvas.getContext('2d');
	var margen = Math.round((canvas.height - canvas.width)/2);
	var tamTablero = canvas.width;
	
	ctx.fillStyle = 'rgb(80, 48, 34)';
	ctx.fillRect(0, 0, tamTablero, margen);
	ctx.fillStyle = 'rgb(75, 43, 29)';
	ctx.fillRect(0, margen, tamTablero, tamTablero);
	ctx.fillStyle = 'rgb(80, 48, 34)';
	console.log(margen + " "+ canvas.width+ " " + (margen+canvas.width));
	ctx.fillRect(0, margen+tamTablero, tamTablero, margen);
} 
		
var loadSettings = function(str){
	return JSON.parse(str);
}
		
var setup = function(){
	var body = document.getElementById("body");
	var canvas = document.createElement("canvas");
	
	var settings = loadSettings("settings.json");
	
	var h = 1024;
	canvas.height = h;
	canvas.width =  (h*4)/5;
	body.appendChild(canvas);
			
	drawWindow(canvas, settings);
}
window.onload = setup;