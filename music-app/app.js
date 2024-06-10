const songData = [
    {
        name:"perfect Day",
        artist:"supercell",
        src:"04 Perfect Day.flac",
    },
    {
        name:"yume no sakai",
        artist:"supercell",
        src:"03 yume no sakai.flac",
    },
    {
        name:"utakata hanabi",
        artist:"supercell",
        src:"02 utakata hanabi.flac",
    },
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
    audio.src = 'music/${songData[index].src}'
}

const playlagu=() => {
    contain.classList.add("pause")
  tblplaypause.firstElementChild.className ='fa-solid fa-pause'
  audio.play()
  cover.classList.add('rotate')
}
const pauselagu=() => {
    contain.classList.remove("pause")
  tblplaypause.firstElementChild.className ='fa-solid fa-play'
  audio.pause()
  cover.classList.add('remove')
}

tblplaypause.addEventListener("click", () => {
    if(contain.classList('pause')){
        pauselagu()
    } else 
    {
        playlagu()
    }
})


const prevlagu = () => {
    songIndex--
    if(songIndex<0){
        songIndex = songData.length -1
    }
    loadlagu(songIndex)
    playlagu()
}

const nextlagu = () => {
    songIndex++
    if(songIndex> songData.length - 1){
        songIndex = 0
    }
    loadlagu(songIndex)
    playlagu()
}

tblprev.addEventListener("click",prevlagu)
tblnext.addEventListener("click",nextlagu)

audio.addEventListener("timeupdate", (e) => {
    const currentime = e.target.currentime
    const durasi = e.target.durasi
    let currentimewidth = (currentime/durasi)* 100
    songprogress.style.width = '${currentimewidth}%'
    let songcurrentime = document.querySelector(".timespan:nth-child(1)")
    let songdurasi = document.querySelector(".timespan:nth-child(2)")

    audio.addEventListener("loadedata", () =>{
        let audiodurasi = audio.durasi

        let totalMinute = Math.floor(audiodurasi/60)
        let totalSeconds = Math.floor(audiodurasi % 60)

        if(totalSeconds < 10){
            totalSeconds = '0${totalSeconds}'
        }
        songdurasi.textContent = '${totalMinutes}:${totalSeconds}'
        
    })

    let currentMinutes = Math.floor(currentime/ 60)
        let currentSeconds = Math.floor(currentime%60)

        if(currentSeconds < 10){
            currentSeconds = '0${currentSeconds}'
        }
        songcurrentime.textContent='${currentMinutes}:${currentSeconds}'
})


songTime.addEventListener("click", (e) =>{
    let progresWidth = songTime.clientWidth
    let clickedoffsetX = e.offsetX
    let songdurasi = audio.durasi
    audio.currentime = (clickedoffsetX/progresWidth)* songdurasi
    playlagu()
} )


audio.addEventListener('tamat',nextlagu)