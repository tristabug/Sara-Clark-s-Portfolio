document.addEventListener("DOMContentLoaded", function(){
    $("#helmick-lor").click(function() {
        $("#lor-pdf").prop("src", "https://docs.google.com/gview?url=https://github.com/tristabug/SaraClarks-Portfolio/raw/preprod/static/assets/HelmickD_LOR_2024.pdf&embedded=true&embedded=true")
        removeActive();
        $("#helmick-lor > img").addClass("active-thumb");
        
        return false;
    });

    $("#bagby-lor").click(function() {
        $("#lor-pdf").prop("src", "https://docs.google.com/gview?url=https://github.com/tristabug/SaraClarks-Portfolio/raw/preprod/static/assets/BagbyD_LOR_2021.pdf&embedded=true&embedded=true")
        removeActive();
        $("#bagby-lor > img").addClass("active-thumb");
        return false;
    });

    $("#jennings-lor").click(function() {
        $("#lor-pdf").prop("src", "https://docs.google.com/gview?url=https://github.com/tristabug/SaraClarks-Portfolio/raw/preprod/static/assets/JenningsO_LOR_2021.pdf&embedded=true&embedded=true")
        removeActive();
        $("#jennings-lor > img").addClass("active-thumb");
        return false;
    });

    $("#lane-lor").click(function() {
        $("#lor-pdf").prop("src", "https://docs.google.com/gview?url=https://github.com/tristabug/SaraClarks-Portfolio/raw/preprod/static/assets/LaneT_LOR_2020.pdf&embedded=true&embedded=true")
        removeActive();
        $("#lane-lor > img").addClass("active-thumb");
        return false;
    });
}); 

function removeActive() {
    $("#lane-lor > img").removeClass("active-thumb");
    $("#lane-lor > img").addClass("thumb-border");
    
    $("#jennings-lor > img").removeClass("active-thumb");
    $("#jennings-lor > img").addClass("thumb-border");
    
    $("#bagby-lor > img").removeClass("active-thumb");
    $("#bagby-lor > img").addClass("thumb-border");
    
    $("#helmick-lor > img").removeClass("active-thumb");
    $("#helmick-lor > img").addClass("thumb-border");
}

