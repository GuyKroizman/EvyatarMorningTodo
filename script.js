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

function startTimer(display) {
    if(!display) {
        console.error('did not get element for display')
        return ;
    }
    setInterval(function () {
        let timer = getSecondsToDeadline(), minutes, seconds;

        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

    }, 1000);
}

function getSecondsToDeadline() {
    const timeNow = new Date();
    const hourNow = timeNow.getHours()
    const minNow = timeNow.getMinutes()
    const secNow = timeNow.getSeconds()

    const secSinceMidnight = hourNow * 60 * 60 + minNow * 60 + secNow
    const deadlineSec = 7 * 60 * 60 + 35 * 60

    if(secSinceMidnight > deadlineSec) {
        const hourTilTomorrow = 24 - hourNow -1
        const minTilHour = 60 - minNow - 1
        const secTilMin = 60 - secNow -1
        return deadlineSec + hourTilTomorrow * 60 * 60 + minTilHour * 60 + secTilMin
    }

    return deadlineSec - secSinceMidnight;
}

const display = document.querySelector("#timer");
startTimer( display )

fetchCatPic()