const navlinks = document.querySelectorAll('.navlink')
const pages = document.querySelectorAll('.page')

navlinks.forEach((navalink) =>{
    navalink.addEventListener("click", () => {
        pages.forEach((page)=>{
            if(page.classList[1] === navalink.classList[1]){
                page.classList.add('change')
            }  else {
                page.classList.remove('change')
            }
        })
    })

    if(window.innerWidth<=600){
        let newText = `${navalink.textContent.split('')[0]}${navalink.textContent.split('')[1]}`
        //console.log(newText)
        navalink.textContent = newText
    }

window.addEventListener("resize", () => {
    location.reload()
})
})