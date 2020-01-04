const api_key = "gJ7YOOKcM1WFWMFtihC3dPS3ld1KgSln";
//https: //api.giphy.com/v1/gifs/search?api_key=gJ7YOOKcM1WFWMFtihC3dPS3ld1KgSln&q=baby yoda&limit=100&offset=0&rating=G&lang=en

let query = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=baby yoda&limit=100&offset=0&rating=G&lang=en`;



$.ajax({
    url: query,
    method: "GET",
    error: function(XMLHttpRequest, textStatus, errorThrown) {
        alert("some error");
    }
}).then(function(response) {
    console.log(response);
    // $("#json-reponse-ID").text(response.data[0].url);

    console.log("typeof response.data", typeof response.data);
    console.log("response.data[0].images.fixed_width.url", response.data[0].images.fixed_width.url);
    let i = 0;
    response.data.forEach(element => {
        console.log(element.images.fixed_width.url);
        let url = element.images.fixed_width.url;
        let img = $("<img>").attr("src", url).addClass("byGif");
        let a = $("<a>").addClass("carousel-item").attr("href", `#${i}`);
        a.append(img);
        $("#json-reponse-ID").append(img);
    });
});