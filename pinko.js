class pinko {
    constructor(x,y,r){
    var options={
        isStatic:true
    }
    this.r=10
    this.body=Bodies.circle(x,y,10,options)
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
       translate(pos.x,pos.y);
       rotate (angle);
       fill ("white")
       ellipseMode(RADIUS)
       ellipse(0,0,10,10)
       pop ();
    
    }
}