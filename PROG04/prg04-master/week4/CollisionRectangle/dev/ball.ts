/// <reference path="paddle.ts"/>

class Ball {
    
    private div : HTMLElement;

    private x : number;
    private y : number;
    private width: number;
    private height: number;

    private speedX : number;
    private speedY : number;
    
    public getBounds():Rectangle {
        return new Rectangle(this.x, this.y, this.width, this.height);
    }
    
    constructor() {
        // creeer een div element
        this.div = document.createElement("ball");
        document.body.appendChild(this.div);
        
        // positie
        this.setStart();
    }
    
    private setStart(){
        this.x = 330;
        this.y = 210;
        this.width = 40;
        this.height = 40;
        
        this.speedX = -3;
        this.speedY = 0;
    }
    
    // we hit a paddle
    public hitPaddle(){
        this.speedX *= -1;
    }
    
    // positie aanpassen, check of we de muur raken
    public update() : void {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // bal uit de game halen als de bal uit het scherm gaat
        if( this.x > window.innerWidth || this.x < -40) { 
            document.getElementsByTagName("ui")[0].innerHTML = "Resetting ball";
            this.setStart();
        } 
        
        // stuiteren tegen de randen
        if( this.y + 40 > window.innerHeight || this.y < 0) { 
            this.speedY *= -1;
        }
        
        this.draw();
    }
    
    // tekenen
    public draw() : void {
        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px)";
    }
}