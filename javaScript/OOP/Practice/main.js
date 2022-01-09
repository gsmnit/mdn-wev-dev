// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// co-ordinate(x & y) velocity(in x and y directon)
function Ball(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }

Ball.prototype.draw = function(){
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size,0,2*Math.PI);
    ctx.fill();
}

Ball.prototype.update = function() {
    // if ball reach to the right edge or left edge
    if ((this.x + this.size) >= width || (this.x - this.size) <= 0 ) {
      this.velX = -(this.velX);
    }
  
    // if ball reach to bottom edge or  top edge
    if ((this.y + this.size) >= height || (this.y - this.size) <= 0) {
      this.velY = -(this.velY);
    }
    
    // always update the co-ordinates
    this.x += this.velX;
    this.y += this.velY;
  }

  Ball.prototype.collisionDetect = function() {
    for (let j = 0; j < balls.length; j++) {
      if(j == 1) continue;
      if (!(this === balls[j])) {
        // distance between two ball's center
        const dx = this.x - balls[j].x;
        const dy = this.y - balls[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
      // if the distance between two ball center is less then r1+r2
      // r1 = radius of first ball  = this.size
      // r2 = radius of second ball = balls[j].size
        if (distance < this.size + balls[j].size) {
          balls[j].color = this.color; //'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) +')';
          let val = [this.velX,this.velY];

          // if the size of the two balls are not equal than we need to find factor that is simply the  ratio of size of second ball and size of first ball for calculation of first ball's velocity
          // first ball = this
          // second ball = balls[j]
          let factor = balls[j].size/this.size;
          this.velX = factor * balls[j].velX;
          this.velY = factor * balls[j].velY;

          // now factor will be reversed
          factor = 1/factor;
          balls[j].velX = factor * val[0];
          balls[j].velY = factor * val[1];
        }
      }
    }
  }

let balls = [];

while (balls.length < 25) {
    let size = random(10,60);
    let ball = new Ball(
      // ball position always drawn at least one ball width
      // away from the edge of the canvas, to avoid drawing errors
      random(0 + size,width - size),
      random(0 + size,height - size),
      random(-7,7),
      random(-7,7),
      'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
      size
    );
  
    balls.push(ball);
  }

function loop() {
  ctx.fillStyle = 'rgba(0, 0, 0)';
  ctx.fillRect(0, 0, width, height);
  
  for (let i = 0; i < balls.length; i++) {
    balls[i].update();
    balls[i].collisionDetect();
    balls[i].draw();
  }
 
  requestAnimationFrame(loop);
}

loop();
  