class Log{
    constructor(x,y,height,angle){
        this.width = 20 
        this.height = height
        var options = {
            restitution : 0.8,
            friction :  1
        }
        this.body = Bodies.rectangle(x,y,this.width,this.height,options)
        Matter.Body.setAngle(this.body,angle);
        World.add(world,this.body)
        
    }

    display(){
        var pos = this.body.position
        var angle = this.body.angle
        //RADIANS 
        push();
        stroke("pink");
        fill("orange");
        angleMode(RADIANS);
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height)
        pop();
    }
}