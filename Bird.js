class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image1=loadImage("sprites/smoke.png")
  this.array=[]
  }

  display() {
    super.display();


 if(this.body.velocity.x>5 && this.body.position.x>250){
  var pos=[this.body.position.x,this.body.position.y]
  this.array.push(pos);
}
  
    for(var i=0; i<this.array.length;i++){
      image(this.image1,this.array[i][0],this.array[i][1])
    }
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    
  }
}
