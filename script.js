
// erzeugt Speicher mit Namen gruesse und legt "Hallo Welt" darin ab
let gruesse = "Hallo Welt"

// erzeugt Speicher (Variable) mit Namen fruit und speichert das HTML Element mit der Klasse fruit darin
let fruit = document.querySelector(".fruit")

// selbe wie oben mit Variable veg, in der das HTML-Element mit der Klasse veg gespeichert wird
let veg = document.querySelector(".veg")

// Gibt die Variable veg auf der Konsole (im Browser) aus
console.log(veg)

// Wird gestartet wenn auf Obst geklickt wird
function clickFruit(){
    // die Klasse hide wegenehmen bei fruit
    fruit.classList.remove('hide')
    
    // die Klasse hide bei veg hinzufügen
    veg.classList.add('hide') 
}

function clickVeg(){
    veg.classList.remove('hide')
    fruit.classList.add('hide') 
}

