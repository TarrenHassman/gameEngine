
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