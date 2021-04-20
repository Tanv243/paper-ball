class paper {
    constructor(x, y, width, height) {
      var options = {
          isstatic:false,
          'restitution':0.3,
          'friction':0,
          'density':1.2
      }
      this.image=loadImage("paper.png");
      this.body = Bodies.rectangle(x, y, width, height, options);
     
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      stroke("red");
      strokeWeight(4);
      fill(225);
     
      image(this.image,100,-15,this.width,this.height);
      pop();
    }
  };