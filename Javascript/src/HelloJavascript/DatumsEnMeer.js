/**
 * Created by romek on 24-11-16.
 */


function prepareEventHandlers() {

    var vandaag = new Date(); // Current date and time
    vandaag.getDay();
    var knop = document.getElementById("knop1");
    knop.onclick = function () {
        alert(vandaag + "");
    }
    //This bit bellow makes sure and let's you know when it is weekend
    var knop2 = document.getElementById("knop2");
    knop2.onclick = function () {
        var d = new Date();
        var n = d.getDay();
        if (n == 6 || n == 0)
            alert("Its weekend!!");
        else
            var howManyDays = (6 - n);
        alert(howManyDays + " Days till weekend!");
    }
    //Next meals
    var nextMeal = new Date();
    nextMeal.getHours();
    var knop3 = document.getElementById("knop3");
    knop3.onclick = function () {
        var l = new Date();
        var h = l.getHours();
        if (h >= 21 || h <= 9)
            alert("Ochtend eten");
        else if (h <= 14 || h >= 9)
            alert("Middag eten");
        else if (h >= 14 || h <= 21)
            alert("Avond Eten");


    }
    // when you need to pay rent and you hypotheek
    var knop4 = document.getElementById("knop4");
    knop4.onclick = function () {
        var vandaag = new Date();
        var months = vandaag.getMonth();
        var aantalMaanden = 12 - months;
        if (months == 0 || months == 3 || months == 6 || months == 9)
            alert("Deze maand moet u uw huur betalen");
        else if (months == 11 || months > 9 && months == 10)
            alert("Nog " + aantalMaanden + " maand(en) voor u moet betalen");
        else if (months == 1 || months > 0 && months == 2)
            alert("Nog " + aantalMaanden + " maand(en) voor u moet betalen");
        else if (months == 7 || months > 6 && months == 8)
            alert("Nog " + aantalMaanden + " maand(en) voor u moet betalen");

    }
}
function prepareEventHandlers2() {
    //Date Methods
    var v = new Date();
    v.setFullYear(2200, 5, 4);
    var knop5 = document.getElementById("knop5");
    knop5.onclick = function () {
        alert(v + "");
    }
    //Huiswerk conditional
    var h = new Date();
    h.setFullYear(2016, 11, 30);
    var v2 = new Date();
    v2.getFullYear();
    var knop6 = document.getElementById("knop6");
    knop6.onclick = function () {
        if (v2 >= h)
            alert("Je huiswerk is optijd ingelevered");
        else if (v2 <= h)
            alert("Je hebt je huiswerk te laat ingeleverd");
    }
}

window.onload = function () {
    //Prep everything I need
    prepareEventHandlers();
    prepareEventHandlers2();
}