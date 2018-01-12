function handleAPILoaded() {
    $('#search-button').attr('disabled', false);
}

// Search for a specified string.
function search() {
    var q = $('#query').val();
    var request = gapi.client.youtube.search.list({
        q: q,
        part: 'snippet'
    });

    request.execute(function (response) {
        const listUp = document.querySelector('#search-container');
        listUp.innerHTML = "";
        const player = document.querySelector('#player');
        var str = JSON.stringify(response.result);
        console.log(response)
        for (let item of response.items) {
            const imgEl = document.createElement('img');
            const pEl = document.createElement('p');
            imgEl.src = item.snippet.thumbnails.default.url;
            pEl.textContent = item.snippet.title;
            // figureEl.classList.add('search-container__list');
            imgEl.addEventListener('click', e => {
                // document.body.innerHTML = "";
                player.innerHTML = "";
                const iframe = document.createElement('iframe');
                iframe.classList.add('YT-iframe');
                iframe.src = `http://www.youtube.com/embed/${item.id.videoId}`
                player.appendChild(iframe);


                console.log(item.id.videoId);
            })
            listUp.appendChild(imgEl);
            listUp.appendChild(pEl);
        }

    });
}

document.querySelector('#query').addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        search();
    }
})