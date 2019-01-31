// My array of stings/giphy's
var buttons = ["Tetris", "Pacman", "Galaga", "Frogger", "Defender", "Mario Bros", "Star Wars", "Duck Hunt", "Missile Command", "Donkey Kong"]

function getGiphy() {

    // Grab data-names from my buttons array.
    var giphy = $(this).attr("data-name");

    // Var tha holds our API URL
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + giphy + "&api_key=b7EI7s7YtuxvcD1MnXmr6c5nh7gYF9Pt&limit=10&rating=pg"
    
    // Empty the giphs before running another API call.
    $(".giphy-holder").empty().removeClass("hidden");
    
    // Calling the Giphy API
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);

        // Looping through the response data array.
        for(var i = 0; i < 10; i++) {
            // Var's of response data
            var rating = response.data[i].rating;
            var url = response.data[i].images.original_still.url;
            // Var that holds dynamic HTML
            var output = "<div class='giphy-div'><h4 id='ratings'>Rating: " + rating + "</h4>" +
                        "<img id='new-giphy' width='300px' height='250px' src='" + url + "'/></div>";

            // Add giphy's to page
            $(".giphy-holder").append(output);
        };

    });

};


function makeButtons() {
    // Empty all buttons before adding them again.
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
    // Get value from input and check if it is blank.
    var button = $(".input").val().trim();
        //if(!$(this.value).length) {
          //  alert("Input cannot be blank");
       // };
    // Add new button into my buttons array.
    buttons.push(button);

    // Delete input field after submit.
    $(".input").val("");

    makeButtons();
});
// Click event for buttons added dynamically.
$(document.body).on("click", ".retro", getGiphy);

makeButtons();