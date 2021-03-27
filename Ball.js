class Ball{

   constructor(x,y,r){
var options={
    isStatic:false,
    'restitution':0.3,
    'friction':0.5,
    'density':1.2
}
    this.body=Bodies.circle(x,y,r,options)
    
    this.x=x
    this.y=y
    this.r=r
    World.add(world,this.body)
    this
   } 

display(){
var ballPos=this.body.position; 
   
    ellipseMode(CENTER) 
    strokeWeight(4);
     fill("red")
  circle(ballPos.x,ballPos.y,this.r);
        } 
}

