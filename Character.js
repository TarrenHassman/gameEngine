class Character {
    // TO-DO: add all stat properties
    constructor( SpellBook , Health, Stats , x , y){
        this.spellBook = SpellBook;
        this.health = Health;
        this.stats = Stats;
        this.x = x;
        this.y = y;
    }

    // "Initializes" Character element on screen
    draw(){
        //Renders placeholder for art asset
        context.beginPath();
        context.arc(this.x, this.y, 10 , Math.PI * 2, false);
        context.strokeStyle = 'orange';
        context.stroke();
    }
    
    // Animates movement of Character on screen
    move( x , y ){
        //TO-DO: Change to switch statement & make x/y movement simultaneous
        if ( this.x < x && this.y < y ){
            while(this.x < x){
                this.x++;
                this.draw();
            }
            while(this.y < y){
                this.y++;
                this.draw();
            }
        }
        if ( this.x > x && this.y > y ){
            while(this.x > x){
                this.x--;
            }
            while(this.y > y){
                this.y--;
            }
        }
        if(this.x < x && this.y > y){
            while(this.x < x){
                this.x++;
            }
            while(this.y > y){
                this.y--;
            }
        }
        if(this.x > x && this.y < y){
            while(this.x > x){
                this.x--;
            }
            while(this.y < y){
                this.y++;
            }
        }
    }

    renderRange( radius ){
        context.beginPath();
        context.arc(this.x, this.y, radius , 0 , Math.PI * 2, false);
        context.strokeStyle = 'orange';
        context.stroke();
    }

    // Updates/animates location of Character element on screen and changes properties
    update(){


        this.draw()

    }

}