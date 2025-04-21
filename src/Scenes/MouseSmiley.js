class MouseSmiley extends Phaser.Scene{
    constructor() {
        super("mouseSmiley");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        // Create variables to hold constant values for sprite locations
        this.bodyX = 400;
        this.bodyY = 350;

        // Define the locations of the smile and hands relative to the
        // main body location. This way, if we change the main body
        // location, the other values update too.
        this.smileX = this.bodyX;
        this.smileY = this.bodyY + 20;

        this.leftHandX = this.bodyX - 125;
        this.lefthandY = this.bodyY + 20;

        this.rightHandX = this.bodyX + 125;
        this.rightHandY = this.bodyY + 20;
        
        this.counter = 0;
        this.smileType = 'Smile';

        this.pointer = null;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        
    }

    create() {
  // update instruction text
  document.getElementById('description').innerHTML = '<h2>mouseSmiley.js</h2>'

  let my = this.my;   // create an alias to this.my for readability

  // Create the main body sprite
  my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "yellowBody");

  // Create the two sprites, one for each type of smile
  my.sprite.smile = this.add.sprite(this.smileX, this.smileY, "smile");
  my.sprite.dimple = this.add.sprite(this.smileX, this.smileY, "smileDimple");
  
  // Create the sprite for the left and right hands
  my.sprite.leftOpenHand = this.add.sprite(this.leftHandX, this.lefthandY, "handOpen");
  my.sprite.leftOpenHand.flipX = true;   // flip sprite to have thumb on correct side
  my.sprite.rightOpenHand = this.add.sprite(this.rightHandX, this.rightHandY, "handOpen");

  // Since sprites are visible when created and we only want one smile to be shown
  // at a time, make the "dimple" smile not visible to start.
  my.sprite.dimple.visible = false;

  my.MKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
  
    my.pointer = this.input.activePointer;
         
  my.MKey.on('down', (key, event) => {
      this.scene.start("smileyScene");

  });


    }

    update() {
        let my = this.my 

        if (my.pointer.primaryDown){
            for (const spriteParts in my.sprite){
                console.log("bruh");
                const Parts = my.sprite[spriteParts];
                Parts.x = my.pointer.x;
                Parts.y = my.pointer.y;
                
                
            }
            my.sprite.smile.x = my.pointer.x;
            my.sprite.smile.y = my.pointer.y + 20;
        
            my.sprite.leftOpenHand.x = my.pointer.x - 125;
            my.sprite.leftOpenHand.y = my.pointer.y + 20;
        
            my.sprite.rightOpenHand.x = my.pointer.x + 125;
            my.sprite.rightOpenHand.y = my.pointer.y + 20;
        }
        
    }



}