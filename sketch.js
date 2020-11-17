const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles=[];
var plinkos=[];
var Divison=[];
var divisonh=300;


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,height,1200,20);
 /* division4=new Divisons(0,750,5,450)
  divison1=new Divisons(80,750,5,450)
  divison2=new Divisons(160,750,5,450)
  divison3=new Divisons(240,750,5,450)
  division5=new Divisons(320,750,5,450)
  division6=new Divisons(400,750,5,450)
  division7=new Divisons(480,750,5,450)
  */
}

function draw() {
  background(0);  
  Engine.update(engine);
  ground.display()
 /* divison1.display()
  divison3.display()
  divison2.display()
  division4.display()
  division5.display()
  division6.display()
  division7.display()
  */

}

if (frameCount%60===0){
  particles.push(new Particle(random(width/2-10,width/2+10,10,10)))
}
for (var k=0; k<=width; k = k+80){
  divisons.push(new Divisons(k,height-divisonh/2,10,divisonh) );
}

for (var j=40;j <=width; j+j+50)
{
    plinkos.push(new pinko(j,75))
}
for(var j=15;j<=width-10;j=j+50)
{
    plinkos.push(new pinko(j,175))
}

for (var j=0; j < particles.length; J++){
  particles[j].display();
}

for (var k=0;k<divisonh.length;k++){
  divisons[k].display();
}