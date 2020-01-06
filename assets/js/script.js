const api_key = "gJ7YOOKcM1WFWMFtihC3dPS3ld1KgSln";

let query = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=baby yoda&limit=75&offset=0&rating=G&lang=en`;

var lastIndex = 0;
var gifcardArray = [];

$.ajax({
    url: query,
    method: "GET",
    error: function(XMLHttpRequest, textStatus, errorThrown) {
        alert("some error");
    }
}).then(function(response) {
    let i = 0;
    response.data.forEach(element => {
        let still = element.images.fixed_width_still.url;
        let animated = element.images.fixed_width.url;
        let fixedSizeDiv = $("<div>").addClass("gifcard").attr("data-id", i).attr("data-still", still).attr("data-animated", animated);
        fixedSizeDiv.attr("style", `background-image: url(${still})`);
        gifcardArray.push(fixedSizeDiv);
        let a = $("<a>").addClass("carousel-item").attr("href", `#${i++}`);
        a.append(fixedSizeDiv);
        $("#carousel-ID").append(a);
    });
    // $('.carousel').carousel();
    $('.carousel').carousel({
        onCycleTo: function(ele) {
            // $(ele).childnodes(".gifcard");
            //stop last to still
            let last = gifcardArray[lastIndex][0];
            $(last).attr("style", `background-image: url(${$(last).data("still")})`);
            //animate current
            let current = $(ele).children(".gifcard")[0];
            let animated = $(current).data("animated");
            let currentIndex = $(current).data("id");
            $(current).attr("style", `background-image: url(${animated})`);
            // set last to current
            lastIndex = currentIndex;
        }
    });
});