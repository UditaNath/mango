class launcher{
    constructor(bodyA,pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            lenght: 10

        }
        var bodyA=this.bodyA;
        var pointB=this.pointB;
        this.body=Constraint.create(options);
        World.add(world,this.body);

    }
    fly(){
        this.body.bodyA=null;
    }
    attach(bodyA){
        
        this.body.bodyA=bodyA;
        
    }

    display(){
        if(this.body.bodyA){
        var pointA=this.body.bodyA.position;
        var pointB=this.body.pointB;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}

}