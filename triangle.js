class Triangle{
    constructor(x, y, side){
        var options = {
            restitution:0.8,
            friction:0.3,
            density:1.0
        }
        this.body = Bodies.triangle(x-(side/2),y+(side/2),x+(side/2),y+(side/2),x,y-(side/2), options);
        this.width = side;
        this.height = side;
        var p1 = x-(side/2);
        var p2 = x+(side/2);
        var p3 = x; 
        var p4 = y+(side/2); 
        var p5 = y+(side/2); 
        var p6 = y-(side/2);
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
    var pos =this.body.position;
    push();
    fill(255);
        triangle(p1,p4,p2,p5,p3,p6);
        pop();
    }
}