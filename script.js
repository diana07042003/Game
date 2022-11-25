




const canvas= document.getElementById('canvas1');
const ctx= canvas.getContext('2d');
const CANVAS_WIDTH= canvas.width= 500;
const CANVAS_HEIGHT= canvas.height=400;
let gameSpeed= 3;

const backgroundLayer1= new Image();
backgroundLayer1.src='layer1.jpg';







class Layer{
    constructor(image, speedModifier){
        this.x= 0;
        this.y= 0;
        this.width= 500;
        this.height= 400;
        this.x2= this.width;
        this.image= image;
        this.speedModifier= speedModifier;
        this.speed= gameSpeed* this.speedModifier;
    }
    update(){
this.speed= gameSpeed*this.speedModifier;
if(this.x<=-this.width){
    this.x=this.width+this.x2 - this.speed;
}
if(this.x2<=-this.width){
    this.x2=this.width+this.x - this.speed;
}
this.x= Math.floor(this.x - this.speed);
this.x2= Math.floor(this.x2 - this.speed);
    }
    draw(){
         ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
         ctx.drawImage(this.image, this.x2, this.y, this.width, this.height);
    }
}


const layer1= new Layer(backgroundLayer1, 0.2);








function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    layer1.update();
    layer1.draw();
    
    
    requestAnimationFrame(animate);

};
animate();





