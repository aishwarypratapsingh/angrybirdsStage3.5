class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            //bodyB: bodyB,
            pointB:pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
//{ x:200 ,y:100}
    display(){    
           if(this.sling.bodyA)   {        //true , false                             //member functions
        var pointA = this.sling.bodyA.position;   
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
           }
    }

     fly(){                                         //null means empty
     this.sling.bodyA=null;
    
    }
    
}