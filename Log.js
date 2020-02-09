class Log extends BaseClass{
    constructor(x, y, height, angle) {
      super(x,y,10,height,angle);
      Matter.Body.setAngle(this.body, angle);
      this.width = 10;
      this.height = height;
    }
    display(){
      fill("brown");
      stroke("black");
      rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
  };
  