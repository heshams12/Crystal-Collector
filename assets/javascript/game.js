$(document).ready(function () {

    var targetNumber;

    var currentValue = 0;
    var winCount = 0;
    var lossCount = 0;


    init();
    updateScore();

    function init() {
        
        randomizeTarget();
        
        randomizeCrystals();

        currentValue = 0;
    }

    function randomizeTarget() {

        targetNumber = randomNumberGenerator(19, 120);
        $("#target-number").html(targetNumber);
    }

    function randomizeCrystals() {

        $('.crystal').each(function () {
            $(this).val(randomNumberGenerator(1, 12));

        });
    }

    function updateScore() {
        

        var $winApproval = $(".winAnnounce");
        $(".crystal").on("click", function () {
            $winApproval.empty();
            var thisValue = parseInt($(this).val());


            currentValue += thisValue;
            $("#current-score").html(currentValue);


            var $winCount = $("#winCounter")
            var $lossCount = $("#lossCounter")


            if (currentValue > targetNumber) {
                lossCount++;
                $lossCount.html(lossCount);
                $winApproval.html("You lose! Click a crystal to start a new game! You were shooting for " + targetNumber + " you went over with " + currentValue);
                init();





            } else if (currentValue == targetNumber) {
                winCount++;
                $winCount.html(winCount);
                $winApproval.html("You win! Click a crystal to start a new game! You reached " + currentValue);
                init();



            }


        });
    }





    function randomNumberGenerator(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
});