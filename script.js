var songs = [
    { songName: "Hum Ne Wo Sab", duration: "00:44", url: "./audios/hum-ne-wo-sab.mp3", image: "./images/hum-ne-wo-sab.jpeg"},
    { songName: "Hum Par Tumhari Chah ka Ilzam", duration: "01:37", url: "./audios/hum-par-tumhari-chah-ka.mp3", image: "./images/hum-par-tmhari-chah-ka.jpeg"},
    { songName: "Garmi e Shoq e Nazara ka Asar", duration: "01:09", url: "./audios/garmi-e-shoq-e-nazara.mp3", image: "./images/garmi-e-shoq-e-nazara.jpeg"},
    { songName: "Aj Dil K Qareen", duration: "01:09", url: "./audios/aj-dil-k-qareen.mp3", image: "./images/aj-dil-k-qareen.jpeg"},
    { songName: "Apki Yad Aati Rahi Raat Bhar", duration: "01:07", url: "./audios/ap-ki-yad-aati-rahi.mp3", image: "./images/ap-ki-yad-aati-rahi.jpeg"},
    { songName: "Hijr ki Raakh aur Wisaal K Phool", duration: "00:45", url: "./audios/hijr-ki-raakh-aur-wisaal-k-phool.mp3", image: "./images/hijr-ki-raakh-aur-wisaal-k-phool.jpeg"},
    { songName: "Aye khuch Abrr Khuch Sharab Aye", duration: "01:12", url: "./audios/aye-khuch-abrr.mp3", image: "./images/aye-khuch-abrr.jpeg"},
    { songName: "Aj Baazar mein Pa Ba'jolaan Chalo", duration: "01:04", url: "./audios/aj-bazar-mein-pabajulaan.mp3", image: "./images/aj-bazar-mein-pa-bajulaan.jpeg"},
    { songName: "Gar Mujhey iska Yaqeen Ho Mere Humdam", duration: "02:19", url: "./audios/gar-mujhey-iska-yaqeen-ho-mere-humdam.mp3", image: "./images/gar-mujhey-iska-yaqeen-ho-mere-humdam.jpeg"},
    { songName: "Dard itna tha k", duration: "01:08", url: "./audios/dard-itna-tha.mp3", image: "./images/dard-itna-tha.jpeg"},
    { songName: "Dasht e Tanhai Mein", duration: "01:37", url: "./audios/dasht-e-tanhai-mein.mp3", image: "./images/dasht-e-tanhai-mein.jpeg"},
    { songName: "Gulon Mein Rang Bhary", duration: "01:47", url: "./audios/gulon-mein-rang-bhary.mp3", image: "./images/gulon-mein-rang-bhary.jpeg"},
    { songName: "Hum Jo Tareek Rahon Mein Maary gaye", duration: "01:55", url: "./audios/hum-jo-tareek-raahon-mein.mp3", image: "./images/hum-jo-tareek-raahon-mein.jpeg"},
    { songName: "Tum Aye Ho Na Shab e Intezar Guzri Hai", duration: "01:00", url: "./audios/tum-aye-ho-na-shab-e-intazar.mp3", image: "./images/tum-aye-ho-na-shab-e-intazar.jpeg"},
]

var allSongs = document.querySelector("#all-songs");

var poster = document.querySelector("#left");

var play = document.querySelector("#play");
var previous = document.querySelector("#previous");
var next = document.querySelector("#next");


var audio = new Audio();

var flag = 0;

var selectedSong = 0;
// Add audios to the 'allSongs'

function addSongs() {
    var clutter = "";

    songs.forEach(function (song, idx) {
        clutter += `<div class="song-card" id="${idx}">
                    <div class="part-1">
                        <img src="${song.image}" alt="">
                        <h4>${song.songName}</h4>
                    </div>
                    <h5>${song.duration}</h5>
                </div>`
    })

    allSongs.innerHTML = clutter;

    audio.src = songs[selectedSong].url;
    poster.style.backgroundImage = `url(${songs[selectedSong].image})`}

addSongs();

// Playing selected audio

// Event Bubbling
allSongs.addEventListener("click", function (details) {
    selectedSong = details.target.id;
    addSongs();
    play.innerHTML = `<i class="ri-pause-fill"></i>`;
    flag = 1;
    audio.play();
})

//play pause concept



play.addEventListener("click", function () {
    if (flag == 0) {
        play.innerHTML = `<i class="ri-pause-fill"></i>`;
        addSongs();
        play.innerHTML = `<i class="ri-pause-fill"></i>`;
        audio.play();
        flag = 1;
    } else {
        play.innerHTML = `<i class="ri-play-fill"></i>`;
        addSongs();
        audio.pause();
        flag = 0;
    }
})

next.addEventListener("click", function () {
    if (selectedSong < songs.length - 1) {
        previous.style.opacity = 1;
        selectedSong++;
        play.innerHTML = `<i class="ri-pause-fill"></i>`;
        addSongs();
        audio.play();
    } else {
        next.style.opacity = 0.3;
    }
})

previous.addEventListener("click", function () {
    if (selectedSong > 0) {
        next.style.opacity = 1;
        selectedSong--;
        addSongs();
        audio.play();
    } else {
        previous.style.opacity = 0.3;
    }
})