var ball;
var database;
function setup(){
    createCanvas(500,500);

    database=firebase.database();

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

//.ref() is used to refer to the location of the database
var locOfChild=database.ref('ball/position')

//.on() creates a listener which keeps on listening to the changes made to the database

locOfChild.on("value",readPosition,showError);

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){

    database.ref('ball/position').set({
        x :ball.x + x,
        y: ball.y + y,

    })
   
}
function readPosition(data){
position=data.val();
console.log(position.x)
console.log(position.y)

ball.x=position.x
ball.y=position.y

}

function showError(){
console.log("error in readind and writing to the database")



}