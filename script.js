function fetchCatPic() {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
            const url = data[0].url
            const element = document.createElement('img')
            element.setAttribute('src', url)

            const wrapDiv = document.querySelector(".cat")
            wrapDiv.appendChild(element)
        }).catch(e => console.error(e))
}

fetchCatPic()