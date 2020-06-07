class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height,0,1.1,0.8);
    this.image = loadImage("sprites/wood1.png");
  }
};
