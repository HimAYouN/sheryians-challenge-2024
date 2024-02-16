var arr = [
    { songName: "Jale 2", url: "./songs/Jale 2.mp3", img: "./images/jale.jpg" },
    { songName: "Pehle Bhi main", url: "./songs/Pehle Bhi Main.mp3", img: "./images/animal.jpg" },
    { songName: "Ram siya ram", url: "./songs/Ram Siya Ram.mp3", img: "./images/ram.jpg" },
    { songName: "Arjan Valley", url: "./songs/Arjan Vailly Ne.mp3", img: "./images/animal.jpg" }
]
var allSongs = document.querySelector("#all-songs");
var audio = new Audio();

function showSongs(){
    var clutter = "";
    arr.forEach((song, i)=>{
        clutter+= `<div class="song-card" id="${i}">
        <div class="part1">
            <img src="${song.img}" alt="" />
            <h2>${song.songName}</h2>
        </div>
        <h6>${i}</h6>
    </div>`
    })
    
    allSongs.innerHTML = clutter
}

allSongs.addEventListener('click', (e)=>{
    console.log(arr[e.target.id].img)
    audio.src = arr[e.target.id].url;
    audio.play()
    document.querySelector('#left').style.backgroundImage = `url("${arr[e.target.id].img}")`

})



showSongs();