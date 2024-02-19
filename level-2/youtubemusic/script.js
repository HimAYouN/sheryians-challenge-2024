var arr = [
    { songName: "Jale 2", url: "./songs/Jale 2.mp3", img: "./images/jale.jpg" },
    { songName: "Pehle Bhi main", url: "./songs/Pehle Bhi Main.mp3", img: "./images/animal.jpg" },
    { songName: "Ram siya ram", url: "./songs/Ram Siya Ram.mp3", img: "./images/ram.jpg" },
    { songName: "Arjan Valley", url: "./songs/Arjan Vailly Ne.mp3", img: "./images/animal.jpg" }
]
var allSongs = document.querySelector("#all-songs");
var audio = new Audio();
var selectedSong = 0;

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
    audio.src = arr[selectedSong].url;
    document.querySelector('#left').style.backgroundImage = `url("${arr[selectedSong].img}")`
}



allSongs.addEventListener('click', (e)=>{
    selectedSong = e.target.id;
    showSongs();
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
    flag= 1
    audio.play()

})


var play = document.querySelector('#play');
var backward = document.querySelector('#backward');
var forward = document.querySelector('#forward');
var flag = 0

play.addEventListener('click', ()=>{
    if(flag==0){
        play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
        showSongs()
        audio.play()
        flag = 1
    }else{
        play.innerHTML = `<i class="ri-play-mini-fill"></i>`
        showSongs()
        audio.pause()
        flag = 0 
    }

})


forward.addEventListener('click', ()=>{
    if(selectedSong<arr.length-1){
        selectedSong++
        showSongs();
        audio.play()
    }else{
        forward.style.opacity = 0.4;
    }
})
backward.addEventListener('click', ()=>{
    if(selectedSong>=0){
        selectedSong--
        showSongs();
        audio.play()
    }else{
        backward.style.opacity = 0.4;
    }
})






showSongs();