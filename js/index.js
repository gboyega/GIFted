var url;
var content = document.getElementById("content");
var search = document.getElementById("search");

search.addEventListener("click", () => {
    var searchText = document.getElementById("searchText").value;
    url = `https://api.giphy.com/v1/gifs/search?api_key=btcsURItKXprtrtpnmDkJtiVoTp268Q8&q=${searchText}&limit=50&offset=0&rating=G&lang=en`;
    if (searchText !== "" && searchText !== " ") {
        getData(url);
    } else {
        window.alert("Please enter a search term that contains at least one alphanumeric character")
    }
})

window.onload = () => {
    url = `https://api.giphy.com/v1/gifs/trending?api_key=btcsURItKXprtrtpnmDkJtiVoTp268Q8&limit=50&rating=G`;
    getData(url);
}

const getData = (url) => {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);
            var gifs = data.data;
            content.innerHTML = "";
            for (var i = 0; i < gifs.length; i++) {
                displayCards(gifs, i);
            }
        } else if (request.status >= 400 && request.status < 500) {
            window.alert("Please refresh or try again in a few moments.");
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
        `<div class="col-sm-3 m-0">
            <iframe src="${gifs[i].embed_url}" height="200px"  width:"200px" frameBorder="0"></iframe>  
        </div>`
    content.insertAdjacentHTML('beforeend', card);
}