// This function loads and injects all the repeatable elements

$(function () {
    $(".nav").load("navbar.html");
    $(".footer").load("footer.html");
});


// Titles for videos page
const index = ["The Chainsmokers Asia Recap", "Lay - Sheep (Alan Walker Relift)",
    "Alexander Rybak - Thats how you write a song (Music video)", "Chris Abolade - Tranquilo (Music video)", "Gromee Ft Jesper Jenset", "Chris Abolade - Ford Bronco (Music video)", "Broslo city (YouTube series)",  "Madcon - Drimmedua", "Camilla Phil Hair", "Alan Walker Merch Promo",
    "Madcon - Shoo (Music video)", "Camilla Phil HOY", "Erik Og Kriss - Leker deilig", "Stray", "Alan Walker documentary", "Dsound - Mr. Unicorn", "Jns - Spill (Music Video)", "JNS - GRÅTER UTEN TÅRER (Music Video)"];

let path = window.location.pathname;
console.log(path);
let pathTitle = path.substring(path.lastIndexOf("/") + 1, path.lastIndexOf("."));
console.log(pathTitle);

let titles = [];
if (pathTitle === "/"){
    titles = index;
}else {
    titles = eval(pathTitle);
}

// This function loads and injects all the repeatable elements
$(function () {
    $.get("projectGrid.html", {}, function (data) {
        for (let i=0; i<titles.length; i++){
            let $response = $("<div />").html(data);
            $response.find(".overlay").attr("id", titles[i]);
            $response.find(".overlay-text").text(titles[i]);
            $response.find(".grid-item").css("background-image", "url("+"'static/"+encodeURI(titles[i])+".png')");
            $(".grid-container").append($response);
        };
    });
});

let test = "";

$(document).on("click", ".overlay", function () {
    let text = "work/" + this.id +".html";

    // If the video has already been loaded then there is no need to reload it
    if (this.id === test){
        return false
    }
    // Load the target html into the div with class video and scroll to the video
    else {
        /*$(".video").load("work/" + test1 + ".html");*/
        $(".video").load(encodeURIComponent(text));

        $('html, body').animate({
            scrollTop: $("div.video").offset().top
        }, 500);
        test = this.id;
    }
});