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

//эффект снега
particlesJS("particles-js", {
    particles: {
        number: {
            value: 1000,
            density: {
                enable: true,
                value_area: 631.3280775270874
            }
        },
        color: {
            value: "#fff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            },
            image: {
                src: "img/github.svg",
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: 5,
            random: true,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 5,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: false,
            distance: 500,
            color: "#ffffff",
            opacity: 0.4,
            width: 2
        },
        move: {
            enable: true,
            speed: 2,
            direction: "bottom",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: false,
                mode: "bubble"
            },
            onclick: {
                enable: true,
                mode: "repulse"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 0.5
                }
            },
            bubble: {
                distance: 400,
                size: 4,
                duration: 0.3,
                opacity: 1,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function() {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
};
requestAnimationFrame(update);