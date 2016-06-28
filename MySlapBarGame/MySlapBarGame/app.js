var health = 100
var playAgain = 'Play Again!' 

//  help yourself to a garnish
function garnish(){
 damagePatron(10);
 document.getElementById('message').innerText = 'Gross! Get your dirty fingers off the fruit!'
 
}
//  leave a 5% tip
function tip(){
 damagePatron(12)
 document.getElementById('message').innerText ='Not cool.'
}

// order fireball shots
function fireball(){
  damagePatron(5)
  document.getElementById('message').innerText ='Amateur hour.'
}

// annoying other patrons
function sloppy(){
  damagePatron(7)
  document.getElementById('message').innerText ='Nobody wants to see that.'
}
// slurred words
function slur(){
    damagePatron(4)
    document.getElementById('message').innerText ='Somebody take this guy home!'
}
// buy bartender a shot
function buyshot(){
restore(15)
document.getElementById('message').innerText ='Well done!'

}
// ----------------
function damagePatron(x){
  health -= x

  if(health <= 0){
        console.log("Get out of my bar!!")
        alert("Get out of my bar!")
        document.getElementById('health').innerHTML = '<button type="reset" value="reset">'+playAgain+'</button>';
        
  }else{
    document.getElementById('healthcounter').innerText = health;
  }
}
// -----------------------------------
/*
function restore(x){
  health += x

  (health >= 0){
        document.getElementById('healthcounter').innerText = health;
        
  }
}*/