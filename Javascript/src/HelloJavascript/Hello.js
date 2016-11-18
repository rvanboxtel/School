/**
 * Created by romek on 16-11-16.
 * These are alerts
 */

var name = prompt("Wat is je naam?");
alert("Hallo, " + name +"!");

var leeftijd = prompt("Wat is je leeftijd?");
if (leeftijd < 18){
    alert("Je bent niet oud genoeg sorry");
}
else {
    alert("U mag verder.");
}

if (leeftijd > 17) {
    var adres = prompt("Waar leeft u?");
    alert("U heet, "+ name+ " Uw leeftijd, " + leeftijd +" Uw woonplaats, " + adres);
}
else {
    close(window);
}

