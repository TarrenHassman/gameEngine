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