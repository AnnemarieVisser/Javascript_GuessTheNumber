//Welkom bij spel
alert('Welkom bij Raad het Getal!');
//Vraag om naam
let naam = prompt("Hoe mag ik je noemen?");
//Welkom naam
alert('Welkom, ' + naam + '!');
//vraag gebruiker naar nummer 

//pak willekeurig nummer
let y = Math.floor(Math.random() * 10) + 1;
console.log(y);

let x = prompt('Welk nummer wil je raden?');


//controleer of nummer overeen komt met willekeurig nummer
for (i = 0; i < 4; i++) {

    let z = parseInt(x);
    //zo ja, gefeliciteerd!
    if (z == y) {
        alert('Gefeliciteerd! Het nummer is geraden.');
        break;

        //zo nee, vraag opnieuw naar nummer
    } else {
        alert('Helaas! Het nummer is niet geraden. Je hebt nog ' + (4 - i) + ' pogingen over.');
        x = prompt('Welk nummer wil je raden?');
    }
}

alert('Het te raden nummer was: ' + y);
alert('Klaar met spelen, ' + naam + '. Tot de volgende keer!');




//maximaal 5x raden

//helaas, einde spel, dag naam, tot volgende keer