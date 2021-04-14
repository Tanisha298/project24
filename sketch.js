const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    iron=new Iron(300,300)
    sand=new Sand(500,550,10)
    sand1=new Sand(505,550,10)
    sand2=new Sand(510,550,10)
    sand3=new Sand(515,550,10)
    sand4=new Sand(520,550,10)
    sand5=new Sand(525,550,10)
    sand6=new Sand(545,550,10)
    sand7=new Sand(530,550,10)
    sand8=new Sand(535,550,10)
    sand9=new Sand(540,550,10)
    stone=new Stone(400,300)
    rubber=new Rubber(200,350,60)


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    stone.display()
    iron.display()
    sand.display()
    sand1.display()
    sand2.display()
    sand3.display()
    sand4.display()
    sand5.display()
    sand6.display()
    sand7.display()
    sand8.display()
    sand9.display()
}