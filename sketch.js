class Barritas{
  constructor(x,y){
  this.x = x;
  this.y = y;
  this.largo = 200;
  this.ancho = 50;
  }
  createBar(){
    fill(0,0,0);
    rect(this.x,this.y,this.ancho,this.largo);
    noFill();
  }
  moving(my){
    this.y = my;
  }
  movete(){
    if(key >='w'){
      this.y -=40;
    } else if(key >='s'){
      this.y +=40;
    }
  }
  getX(){
    return this.x;
  }
  getY(){
    return this.y;
  }


}




class Pelotuda{
  constructor(x,y){
  this.x =x;
  this.y = y;
  this.diameter = 50;
  this.direccionX =1;
  this.direccionY =1;

  }
  createpelotuda(){
    fill(242, 93, 80);
    circle(this.x,this.y,this.diameter);
    noFill();
  }
  correpelotuda(){
    this.x +=random(0, 5)*this.direccionX;
    this.y +=random(0, 5)*this.direccionY;

  }
  validatepelotudaI(derbar){
    
     if (this.x>derbar.x&&this.x<derbar.y+derbar.ancho&&this.y>derbar.y&&this.y<derbar.y+derbar.largo){
      return true
    }else{
       return false
     }  
  
    
  }

}

class Puntaje{
  constructor(){
    this.a=0;
    this.b=0;
  }

  plusA(Pelotuda){
    textAlign(CENTER);
    textSize(32);
    //text(a,100,100,);
    if(Pelotuda.getX < 0){
      a++;
    }

  }
}

let izqbar;
let derbar;


function setup() {
  createCanvas(900, 900);
  izqbar = new Barritas(50,450);
  derbar = new Barritas(750,450);
  bolita = new Pelotuda (450,450);
  puntosA = new Puntaje();
  

}

function draw() {
  background(220);
  izqbar.createBar();
  derbar.createBar();
  bolita.createpelotuda();
  bolita.correpelotuda(); 
  //puntosA.plusA(bolita);

}

function contactoPositivo(){
  if(derbar.validatepelotudaI(bolita)){
    console.log("Please");
    
  }
}

function mouseMoved (){
  derbar.moving (mouseY);

}
function keyPressed(){
  izqbar.movete();
}

