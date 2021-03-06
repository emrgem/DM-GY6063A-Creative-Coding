/////////////////////////////
// Object constructor!
/////////////////////////////
function Particle(pos) {
  this.speed   = 10;
  this.name    =  "astroid";
  this.color   = "red";
  this.pos     = pos;//pos is a p5.Vector
}

// here's where we define our methods
// aka. the stuff the Object does
Particle.prototype = {
  constructor : Particle,
  bounce : function(){
    // if particle position has gone outside the boundary
    // of our canvas.  reverse speed!
    if (this.pos.y > height || this.pos.y < 0){
      this.speed *= -1;
    }
    //add speed to our our particle position
    this.pos.add(new p5.Vector(0,this.speed));
  },
  render : function(){
    fill(this.color);
    noStroke();
    ellipse(this.pos.x,this.pos.y, 100, 100);
    fill(255);//white text
    textAlign(CENTER);
    text(this.name, this.pos.x, this.pos.y);
  }
  
};

var particle;
function setup() {
  createCanvas(windowWidth,windowHeight);
  particle = new Particle(createVector(width/2, height/2));
}

function draw() {
  background(255);
  particle.render();
  particle.bounce();
  //remember all of that extra code that used to
  //be here?  Look at the Particle.render() function!
}