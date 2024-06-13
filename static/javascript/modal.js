      
function setItem(e, id) {
    clear();
    var name = e['name'];
    var description = e['description'];
    var type = e['type'];
    var allSpecs = e['specs'];
    var challenges = e['challenges'];
    var learned = e['learned'];
    var visuals = e['visuals'];
    var main = visuals['main'];
    var specs = "";

    for ( var i = 0, l = allSpecs.length; i < l; i++ ) {
        specs += '<span class="spec rounded">' + allSpecs[ i ] + '</span>';
    }

    $("#modal-title").text(name);
    $("#modal-description").text(description);
    $("#modal-type").text(type);
    $("#modal-specs").append(specs);
    $("#modal-challenges").text(challenges);
    $("#modal-learned").text(learned);
    $("a#modal-button").attr("href", "/project/" + id);
    $("#modal-main-img").attr("src", main['file']);
    $("#modal-main-img").attr("alt", main['desc']);
}

function clear() {
    $("#modal-specs").empty();
}
