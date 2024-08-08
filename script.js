function christmasCountdown() {
    const christmasDate = new Date("December 25, 2024 00:00"); /*("August 8, 2024 14:35");*/
    const now = new Date();
    const diff = christmasDate - now;

    const msInSecond = 1000; //сколько милисекунд в секундах
    const msInMinute = 60 * 1000; //сколько милисекунд в минутах 
    const msInHour = 60 * 60 * 1000; //сколько милисекунд в часах
    const msInDay = 24 * 60 * 60 * 1000; //сколько милисекунд в днях

    const displayDay = Math.floor(diff / msInDay); //расчет дней
    document.querySelector(".days").textContent = displayDay;

    const displayHour = Math.floor((diff % msInDay) / msInHour); //расчет часов
    document.querySelector(".hours").textContent = displayHour;

    const displayMinute = Math.floor((diff % msInDay % msInHour) / msInMinute); //расчет минут
    document.querySelector(".minutes").textContent = displayMinute;

    const displaySecond = Math.floor((diff % msInMinute) / msInSecond); //расчет секунд
    document.querySelector(".seconds").textContent = displaySecond;

    //когда обратный отсчет = 0, остановить счетчик на 0
    if (diff <= 0) {
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;
        clearInterval(timerID);
        merryChristmas();
        console.log(timerID);
    }
};

let timerID = setInterval(christmasCountdown, 1000);

function merryChristmas() {
    const heading = document.querySelector("h1");
    heading.textContent = "MERRY CHRISTMAS!!! HO-HO-HO!!!";
    heading.classList.add("red");
};

const button = document.querySelector("#myButton");
button.addEventListener("click", function() {
    document.querySelector("#myAudio").play();
})