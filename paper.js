class Paper {
    constructor(x, y,radius) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, radius);
      this.width = width;
      this.height = height;
      
      
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(5);
      stroke("green");
      fill("blue");
      ellipse(0, 0, this.radius);
      pop();
    }
  };
  