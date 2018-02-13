$(document).ready(function () {

    var targetNumber;
    
    var currentValue = 0;
    var winCount = 0;
    var lossCount = 0;


    init();
    updateScore();

    function init() {
        /* Set random number for the game target number*/
        randomizeTarget();
        /*Set value for each crystal*/
        randomizeCrystals();

        currentValue =0;
    }

    function randomizeTarget() {
        console.log('Randomizing Target Number Now');
        targetNumber = randomNumberGenerator(19, 120);
        $("#target-number").html(targetNumber);
    }

    function randomizeCrystals() {
        console.log('Randomizing Crystals Values Now');
        $('.crystal').each(function () {
            $(this).val(randomNumberGenerator(1, 12));
            console.log($(this).val());
        });
    }

    function updateScore() {
        var $currentValue = $("#current-value");
        
        var $winApproval = $(".winAnnounce");
        $(".crystal").on("click", function () {
           $winApproval.empty();
                var thisValue = parseInt($(this).val());

                console.log(thisValue);
                currentValue += thisValue;
                $("#current-score").html(currentValue);
                console.log("Current value: " + currentValue);

                var $winCount = $("#winCounter")
                var $lossCount = $("#lossCounter")
               // document.getElementById("lossCounter").innerHTML = lossCount;
                /*add current value to the current value div*/

                if (currentValue > targetNumber) {
                    lossCount++;
                    $lossCount.html(lossCount);
                    $winApproval.html("You lose! Click a crystal to start a new game! You were shooting for " + targetNumber + " you went over with " + currentValue);
                    init();


                    
                    
                    /* add a loss to the loss column, reset game*/
                }
                else if (currentValue == targetNumber) {
                    winCount++;
                    $winCount.html(winCount);
                     $winApproval.html("You win! Click a crystal to start a new game! You reached " + currentValue);
                    init();
                    
                    
                    /* add a win to the win column, reset game*/
                }

           
        });
    }

    

    

    function randomNumberGenerator(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
});