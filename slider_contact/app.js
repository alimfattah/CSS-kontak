import elements from './person.js'

const{slider, slides} = elements

const rightMove = () => {
    const firstSlide =slider.removeChild(slider.firstElementChild)
    slider.append(firstSlide)
    slider.children[4].classList.add("fade-in")
    slider.style.justifyContent = "flex-end"
}

const leftMove = () => {
    const lastSlide =slider.removeChild(slider.lastElementChild)
    slider.insertBefore(lastSlide, slider.firstChild)
    lastSlide.classList.add("fade-in")
    slider.style.justifyContent = "flex-start"
}

slides.forEach((slide) => {
    slide.addEventListener("click",() => {
        const slideIndex = [...slider.children].indexOf(slide)
        console.log(slideIndex)

        switch (slideIndex) {
            case 0:
                leftMove()
                setTimeout(()=>{
                    leftMove()
                },500)
                break;
            case 1:
                leftMove()
                break;
            case 3:
                rightMove()
                break;
        
            case 4:
                rightMove()
                setTimeout(()=>{
                    rightMove()
                },500)
                
                break;
        
            default:
                break;
        }
    })
})