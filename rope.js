class rope{
    constructor(bodyA,pointB){
var  options={
     bodyA:bodyA,
pointB:pointB,
stiffness:0.004,
length:30
 }
this.pointB=pointB
this.Rope=Constraint.create(options);
World.add(world,this.Rope)
}
fly(){
    this.Rope.bodyA = null;
}

display(){
if(this.Rope.bodyA){
var pos1=this.Rope.bodyA.position
var pos2=this.pointB
strokeWeight(6)
stroke(255,100,0)
line(pos1.x,pos1.y,pos2.x,pos2.y)
}
}
    }
