class Log {
    constructor(x, y, height, angle) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 25, height, options);
      this.width = 25;
      this.height = height;
      Matter.Body.setAngle(this.body, angle);
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(this.body.angle);
      rectMode(CENTER);
      fill("blue");
      stroke("white");
      strokeWeight(5);
      rect(0, 0, this.width, this.height);
      console.log(pos.x);
      console.log(pos.y);
      console.log(this.body.angle);
      pop();
    }
  };
  