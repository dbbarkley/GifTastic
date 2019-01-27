var buttons = ["Tetris", "Pacman", "Galaga", "Frogger", "Defender", "Mario Bros", "Star Wars", "Duck Hunt", "Missile Command", "Donkey Kong"]

function getGiphy() {
    var giphy = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + giphy + "&api_key=b7EI7s7YtuxvcD1MnXmr6c5nh7gYF9Pt&limit=10&rating=g"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    })
}


function makeButtons() {
    $("#button-holder").empty();

    for (var i = 0; i < buttons.length; i++) {
        var b = $("<button>");
        b.addClass("btn btn-primary mb-2 retro");
        b.attr("data-name", buttons[i]);
        b.text(buttons[i]);
        $("#button-holder").append(b);
    }
};
$(".btn").on("click", function(e) {
    e.preventDefault();

    var button = $(".input").val().trim();

    buttons.push(button);

    makeButtons();
});

$(document.body).on("click", ".retro", getGiphy);

makeButtons();