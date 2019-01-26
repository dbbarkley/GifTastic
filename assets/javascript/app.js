var buttons = ["Donkey Kong", "Tetris", "Pacman", "Galaga", "Frogger", "Defender", "Mario Bros", "Missile Command", "Star Wars", "Duck Hunt"]

function makeButtons() {
    $("#button-holder").empty();

    for (var i = 0; i < buttons.length; i++) {
        var b = $("<button>");
        b.addClass("btn, btn-primary, mb-2");
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

makeButtons();