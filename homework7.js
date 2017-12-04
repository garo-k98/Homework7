const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

var x = canvas.width / 2;
var y = canvas.height / 2;
var radius = 15;
var dir = [1, -1];
var direction = dir[Math.round(Math.random())];
var dx = 12;
var dy = 12;
var score = 0; //left p - k
var score1 = 0; //right a - b



var p = 10;
var k = 10;
var width = 20;
var height = 100;

var a = canvas.width - 30;
var b = 10;
var width1 = 20;
var height1 = 100;


const gameOverSound = new Audio("");

const loop = function() {
	
	requestAnimationFrame(loop);
	
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, Math.PI * 2, false);
	ctx.strokeStyle = "#3f725a";
	ctx.stroke();
	ctx.fillStyle = "#3f725a";
	ctx.fill();
	
	

	if(x > canvas.width) {
		
		score = score + 1;
		gameOverSound.play();
		x = canvas.width / 2;
	    y = canvas.height / 2;
		dir = [1, -1];
		direction = dir[Math.round(Math.random())];
		x += dx * direction;
		y += dy * direction;
		
		 
		
	}
	
	else if (x < 0 ) {
		
		score1 = score1 + 1;
		gameOverSound.play();
		x = canvas.width / 2;
		y = canvas.height / 2;
		dir = [1, -1];
		direction = dir[Math.round(Math.random())];
		x += dx * direction;
		y += dy * direction;
		
		
	}
	
	else if(y > canvas.height) {
		dy = -dy;
	}
	
else if(y < 0) {
	dy = -dy;
}
	x += dx * direction;
	y += dy * direction;
	
	ctx.fillStyle = "#351572";
	ctx.fillRect(p,k, width, height);
	
	ctx.fillStyle = "#351572";
	ctx.fillRect(a,b, width1, height1);
	
	
	// collision detection
	
	if(x < a + width1 && x + radius * 2 > a && y < b + height1 && y + radius * 2 > b) {
		dx = -dx;
	}
	else if(x < p + width && x + radius * 2 > p && y < k + height && y + radius * 2 > k) {
		dx = -dx;
	}
	

	
	ctx.font = "30px Indie Flower";
	ctx.fillText("score" + ' ' + score, 200, 50); 
	
	ctx.font = "30px Indie Flower";
	ctx.fillText("score" + ' ' + score1, canvas.width - 300 ,50); 
	
	ctx.beginPath();
	ctx.strokeStyle = "purple";
	ctx.moveTo(canvas.width / 2, 0);
	ctx.lineTo(canvas.width / 2, canvas.height);
	ctx.stroke();
	
	
};

loop();

// x - p 
// y - k 



	const upKey = 38;
	const downKey = 40;
	const wKey = 87;
	const sKey = 83;
	
	document.addEventListener('keydown', function(event){
		
		if(event.keyCode === upKey) {
			k = k - 40;
			
			if(k < 0) {
				k = canvas.height;
			}
			
		}
		
		else if(event.keyCode === downKey){
			
			k = k + 40;
			
			if(k > canvas.height) {
				k = 0;
			}
			
		}
		
	}, false);
	




	document.addEventListener('keydown', function(event){
		
		if(event.keyCode === wKey) {
			b = b - 40;
			
			if(b < 0) {
				b = canvas.height;
				a = canvas.width - 30;
			}
			
		}
		
		else if(event.keyCode === sKey){
			
			b = b + 40;
			
			if(b > canvas.height) {
				b = 0;
				a = canvas.width - 30;
			}
			
		}
		
	}, false);
	
	
	// x - a
	// y - b
	
	