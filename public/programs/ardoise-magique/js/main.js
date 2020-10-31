/***************************************************
 * DEFINE
****************************************************/

/* DOM Elements */
var ardoise = $("#ardoise"),
    canvas = $("#ecran"),
    tool = "input[name=tool]",
    eraseAll = $("#eraseAll"),
    colorSelect = "input[name=colorSelect]",
    thickness = "input[name=thickness]";

/* Canvas */
var context = canvas[0].getContext("2d");
    context.lineCap = "round";

/* Colors */
var colors = ["#000", "#FBFF00", "#FF002C", "#0043FF", "#11EE73"];


/***************************************************
 * INIT
****************************************************/

/* Colors */

for (var i = 0; i < colors.length; i++) {
    $("#color" + i + " div").css("background-color", colors[i] );
    $("#color" + i + " div input").val( colors[i] );
}

/* Draw */

var newLine = new Line(
    context,
    colors[$(colorSelect + ":checked").val()],
    $(thickness + ":checked").val(),
    $(tool + ":checked").val()
);


/***************************************************
 * MAIN PROGRAM
****************************************************/

/*
 * Tool
 */

$(tool).click( function() {
    newLine.setTool( $(tool + ":checked").val() );
});

/*
 * Colors
 */

$(".color input").change(function() {

    // un change sur le input.color modifie la couleur de fond de son div parent
    var color = $(this).val();
    $(this).parent().css("background-color", color );

    // remplace la valeur du tableau colors[]
    var ref = $(this).parent().parent().attr("id")[5];
    colors[ref] = color;

    // sélectionne automatiquement la couleur
    $(colorSelect).prop('checked', false);
    $("#color"+ref+" "+colorSelect).prop('checked', true);

    // modifie la couleur du tracé si elle est sélectionnée
    if ($(colorSelect+":checked").val() == ref) {
        newLine.setColor( colors[ref] );
    }
})

$(colorSelect).click( function() {
    newLine.setColor( colors[$(colorSelect+":checked").val()] );
});

/*
 * Thickness
 */

$(thickness).click( function() {
    newLine.setSize( $(thickness+":checked").val() );
});

/*
 * Draw
 */

canvas.mousedown( function(e) {
    newLine.startDrawing(e.offsetX, e.offsetY);
});

canvas.mousemove( function(e) {
    newLine.drawLine(e.offsetX, e.offsetY);
});

canvas.mouseup( function(e) {
    newLine.stopDrawing(e.offsetX, e.offsetY);
});

canvas.mouseout( function(e) {
    newLine.stopDrawing(e.offsetX, e.offsetY);
});
 
/*
 * Erase All
 */

$(eraseAll).click( function() {
    ardoise.addClass("shake");
    canvas.addClass("disappear");
    setTimeout(function() {
        newLine.eraseAll(canvas[0]);
        ardoise.removeClass("shake");
        canvas.removeClass("disappear");
    }, 1000);
});