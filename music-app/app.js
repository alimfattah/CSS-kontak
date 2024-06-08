const songData = [
    {
        name:"perfect Day",
        artist:"supercell",
        src:"04 Perfect Day.flac"
    }
    {
        name:"yume no sakai",
        artist:"supercell",
        src:"03 yume no sakai.flac"
    }
    {
        name:"utakata hanabi",
        artist:"supercell",
        src:"02 utakata hanabi.flac"
    }
]

const contain = document.querySelector(".contain")
const judul = document.querySelector(".song-name")
const penyanyi = document.querySelector(".song-artist")
const cover = document.querySelector(".cover")
const tblplaypause = document.querySelector(".play-pause")
const tblprev = document.querySelector(".prev-btn")
const tblnext = document.querySelector(".next-btn")
const audio = document.querySelector(".audio")
const durasi = document.querySelector(".song-time")
const progreslagu = document.querySelector(".song-progress")
const  namacover= document.querySelector(".cover span:nth-child(2)")
const namapenyani = document.querySelector(".cover span:nth-child(1)")


window.addEventListener('load',() => {
    loadlagu(songIndex)
}
)


let songIndex = 0

const loadlagu = (index) =>{ 
    namacover.textContent=songData[index].name
    namapenyani.textContent=songData[index].artist
    judul.textContent=songData[index].name
    penyanyi.textContent=songData[index].artist
    audio.src = 'music\${songData[index].src}.flac'
}

const playlagu=() => {
    contain.classList.add("pause")
  tblplaypause.firstElementChild.className ='fa-solid fa-pause'
  audio.play()
}
const pauselagu=() => {
    contain.classList.remove("pause")
  tblplaypause.firstElementChild.className ='fa-solid fa-play'
  audio.pause()
}

tblplaypause.addEventListener("click", () => {
    if(contain.classList('pause')){
        pauselagu()
    } else 
    {
        playlagu()
    }
}

)