﻿var kot = "";
var score = 0;



function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
var questions = [
    ["S'il vous plaît dit Bonjour", "bonjour"],
    ["S'il vous plaît dit Merci", "merci"],
    ["S'il vous plaît dit Au Revoir", "au revoir"],
    ["S'il vous plaît dit Bien", "bien"],
    ["S'il vous plaît dit mal", "mal"]
];
shuffle(questions);
var flag = 0;

// for (var i = -1; i < questions.length - 1; i++ ){
var i = 0;

function qs() {
annyang.setLanguage('fr-FR');
    if (i < questions.length) {
        $(document).ready(function() {
            $(".front").text(questions[i][0])
        });

        //console.log(i)
        //console.log("blah")
        //throw new Error("vla");

        //throw new Error("vla1");
        var commands = {
            'c\'est *tag': function(tag) {
                kot = tag;
                console.log(kot);
                if (questions[i][1] == kot) {
                    $(document).ready(function() {
                        // $(".back").text(questions[i][1])
                        // //$("#card").flip();
                        score++;
                        $(".score").text("Your score is " + score);
                    });
                } else if (kot != "") {
                    $(".back").fadeIn('fast');
                    $(".back").text("Sorry, the answer was " + questions[i][1])
                    $(".front").text(questions[i][0])
                    setTimeout(function() {
                        $(document).ready(function() {
                            $(".back").hide('fast', function() {

                            });
                        });
                    }, 3000);
                };

                i++;;
                qs();
            }

        }
    }
    else 
    {
        $(document).ready(function() {
                        // $(".back").text(questions[i][1])
                        // //$("#card").flip();
                        $(".score").text("Your final score is " + score + " out of " + questions.length);
                        $(".front").text("");
                    });
    }
    annyang.addCommands(commands);
    annyang.debug();
    //  if (!annyang.isListening()){
    //  annyang.start({ autoRestart: false, continuous: false });
    //  }
    // Start listening. You can call this here, or attach this call to an event, button, etc.

    annyang.start();
}


qs();