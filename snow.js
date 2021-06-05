class Snow{
    constructor(x,y,radius){
        var options={
            'density':10,
            'friction':1
        }
        this.body=Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
        this.radius=radius;
    }
    display(){
        var  pos=this.body.position;
        var angle=this.body.angle;
        push ()
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(0,0,this.radius,this.radius);
        pop()
    }
}