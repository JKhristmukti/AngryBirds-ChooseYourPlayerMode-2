class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle,1.0,1.0);
    this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body, angle);
  }
}