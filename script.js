
$( ".pin" ).click(function() {
    $( "#info" ).slideToggle();
});

$( "#nawiguj" ).click(function() {
    console.log("aaa");
    var imageUrl = "img/map-trasa.png";
    $( ".map" ).css("background-image", 'url(' + imageUrl + ')');

});