// Select and set the context from the canvas html element
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var context = canvas.getContext('2d');

// Create a mouse variable for user input
var mouse = {
    x:undefined,
    y:undefined
}

// Set an event listener for mouse movement
window.addEventListener('mousemove' , 
    function( event ){
        mouse.x = event.x;
        mouse.y = event.y;
    }
)

// Create Character class as representation for a Player

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

// Create Spell class as representation for character actions

class Spell {
    
    constructor( x , y , r){
        this.x = x;
        this.y = y;
        this.r = r;
    }
    
    /*
    Draws outline for Spells inside of Spell Bar
    TO-DO: Render art asset inside of outline
    */
    draw(){
        // Renders art asset


        // Draws outline
        context.beginPath();
        context.arc(this.x, this.y, this.r , 0 , Math.PI * 2, false);
        context.strokeStyle = 'orange';
        context.stroke();
    }
    
    // Updates the Spell icons based on screen size.
    // TO-DO: Only update icon during a screen resize event.
    update( index ){
        // Set horizontal based on spellbook index
        this.x = this.r * index;

        // Adjusts vertical position based on screen size
        this.y = (innerHeight - 50);

        // Checks if mouse is inside of Spell element    
        if(
            (mouse.x >= (this.x - this.r) && mouse.x <= (this.x + this.r)) && 
            ( mouse.y >= (this.y - this.r) && mouse.y <= (this.y + this.r) )
        ){
            //Place holder for character.renderRange()
            player.renderRange( 100 );
        }

        // Renders outline and art asset for Spell
        this.draw();

    }

}


function animate(){
    
    //Frame Rate function
    requestAnimationFrame(animate);
    
    // Clear screen every frame
    context.clearRect(0, 0, innerWidth, innerHeight);

    // Draws bottom spell bar
    context.fillRect( 0 , (innerHeight - 100), innerWidth, 100 );
    context.stroke();

    // Renders Characters
    player.update();
    player.move(200, 200);

    // Updates (and initially draws) spells equal to the number of spells in the spellbook variable
    for( index =0; index < spells.length; index++ ){
        spells[index].update( (index+1)*2 );
    }
}

// Placeholder value for spell size
var radius = 37.5;

// Placeholder for Spellbook JSON variable
var spells = [];
for(len = 0; len < 11; len++){
    spells.push(new Spell( radius , (innerHeight - radius), radius));
}

// Placeholder for Character JSON variable
var player = new Character (spells, 12, 12, 100, 100);

// Starts animation loop
animate();