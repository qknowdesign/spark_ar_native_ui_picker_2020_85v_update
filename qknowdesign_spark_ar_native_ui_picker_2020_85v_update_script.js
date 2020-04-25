
// Load the modules

const Scene = require('Scene');

const NativeUI = require('NativeUI');

const Textures = require('Textures');


// First, we create a Promise and load all the assets we need for our scene


Promise.all([

// Loading Textures for the buttons
    
    Textures.findFirst('texture0'),

    Textures.findFirst('texture1'),

    Textures.findFirst('texture2'),



    Scene.root.findFirst('nullObject0'),

    Scene.root.findFirst('nullObject1'),

    Scene.root.findFirst('nullObject2'),


// we can start using our assets and creating the NativeUI Picker    

]).then(function(results){

    
// First, we set the buttons for the NativeUI Picker

    const button1 = results[0];

    const button2 = results[1];

    const button3 = results[2];


// Next, we set the Null Objacts for the switch

    const Obj0 = results[3];

    const Obj1 = results[4];

    const Obj2 = results[5];


// Now, we can finally start building the NativeUI Picker
    
    const configuration = {

      selectedIndex: 0,

// These are the image textures to use as the buttons in the NativeUI Picker
        
      items: [

        {image_texture: button1},

        {image_texture: button2},

        {image_texture: button3}

      ]

    };

// Create the NativeUI Picker

    const picker = NativeUI.picker;

    picker.configure(configuration);

    picker.visible = true;


 // This is a monitor that watches for the picker to be used.
    
    picker.selectedIndex.monitor().subscribe(function(val) {


      switch(val.newValue) {

        case 0: {

           Obj0.hidden = false;
           Obj1.hidden = true;
           Obj2.hidden = true;

           break;

        }

        case 1: {

            Obj0.hidden = true;
             Obj1.hidden = false;
           Obj2.hidden = true;

           break;

        }

        case 2: {

           Obj0.hidden = true;
           Obj1.hidden = true;
           Obj2.hidden = false;

           break;

        }

      }


    });

    
});


