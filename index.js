const hw = require('./hw.json');

/* All topping types */
function toppingType (){
    for(let i=0; i<hw.length;i++){
        for(let j=0; j<hw[i].topping.length;j++){
            console.log(hw[i].topping[j].type);
        }
    }    
}

/* All batter types */
function batterType(){
    for(let i=0; i<hw.length;i++){
        for(let j=0; j<hw[i].batters.batter.length;j++){
            console.log(hw[i].batters.batter[j].type);
        }
    }
}

/*  Ppu average  */
function  AVGppu(){
    var total = 0;
    for(let i = 0; i < hw.length; i++) {
        total += hw[i].ppu;
    }
    var avg = total / hw.length;
    console.log("Average =" +avg);
}


/* Ppu sum */
function SUMppu(){
  var sum = 0;
  for(let i = 0; i < hw.length; i++) {
    sum += hw[i].ppu;
}
  console.log("SUM =" + sum);

}

  /* List of all mentioned IDs regardless to the type  */
 function IDs (){
    HwID();
    toppingID();
    battersID();
 }

function HwID(){
    for(let i=0; i<hw.length;i++){
           console.log(hw[i].id);
       }
}

function toppingID (){
for(let i=0; i<hw.length;i++){
for(let j=0; j<hw[i].topping.length;j++){
    console.log(hw[i].topping[j].id);
}
}

}

function battersID (){
for(let i=0; i<hw.length;i++){
   for(let j=0; j<hw[i].batters.batter.length;j++){
       console.log(hw[i].batters.batter[j].id);
   }
}

}

toppingType();
batterType();
AVGppu();
SUMppu();
IDs();