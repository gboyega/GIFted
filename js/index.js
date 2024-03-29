var url;
var content = document.getElementById("content");
var search = document.getElementById("search");

search.addEventListener("click", () => {
    var searchText = document.getElementById("searchText").value;
    url = `https://api.giphy.com/v1/gifs/search?api_key=btcsURItKXprtrtpnmDkJtiVoTp268Q8&q=${searchText}&limit=50&offset=0&rating=G&lang=en`;
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);
            console.log(data);
            var gifs = data.data;
            content.innerHTML = "";
            for (var i = 0; i < gifs.length; i++) {
                displayCards(gifs, i);
            }
        } else {
            window.alert("There's a problem contacting the server, Please refresh or try again in a few moments.");
        };
    };

    request.onerror = () => {
        window.alert("There's a problem contacting the server, Please refresh or try again in a few moments.");
    }
    request.send();
})

window.onload = () => {
    url = `https://api.giphy.com/v1/gifs/trending?api_key=btcsURItKXprtrtpnmDkJtiVoTp268Q8&limit=50&rating=G`;
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);
            console.log(data);
            var gifs = data.data;
            content.innerHTML = "";
            for (var i = 0; i < gifs.length; i++) {
                displayCards(gifs, i);
            }
        } else {
            window.alert("There's a problem contacting the server, Please refresh or try again in a few moments.");
        };
    };

    request.onerror = () => {
        window.alert("There's a problem contacting the server, Please refresh or try again in a few moments.");
    }
    request.send();
}

const displayCards = (gifs, i) => {
    var card =
        `<div class="col-sm-2 mx-sm-5" style="margin:1em;">
            <iframe src="${gifs[i].embed_url}" class="giphy-embed card-img-top" allowFullScreen></iframe>
            <h3 class="text-primary text-center">${gifs[i].title}</h3>
        </div>`
    content.insertAdjacentHTML('beforeend', card);
}