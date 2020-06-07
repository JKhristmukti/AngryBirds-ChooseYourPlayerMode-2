class BaseClass{
  constructor(x, y, width, height, angle, restitution,f) {
      var options = {
          'restitution':1.0,
          'friction':f,
          'density':1.0,
          'restitution':restitution
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/base.png");
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
}