class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50,0,1.0,0.2);
    this.image = loadImage("sprites/upload_pic_page.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory =[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   

    for(var i=0; i<this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }

  imageChanger() {
    if(keyCode===97){
      this.image = loadImage("sprites/bird.png");
    }
    if(keyCode===98){
      this.image = loadImage("sprites/upload_pic_page.png");
    }
    if(keyCode===99){
      this.image = loadImage("sprites/canonBall.png");
    }
  }
}
