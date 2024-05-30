const inputs = document.querySelectorAll('.forminput')
const letter = document.querySelector('.huruf')
const gembok = document.querySelectorAll('.formgrup i')
const formhead =document.querySelector('.formhead')


inputs.forEach((input) => {
    input.addEventListener("input", (e) => {
        letter.style.opacity = 0
        if(input.type !== "password")
        {
            setTimeout(()=>{
                letter.textContent= e.target.value.split('').slice
                (-1)
                letter.style.opacity=1
            },100)
        } else {
            setTimeout(() =>{
                letter.textContent = "*"
                letter.style.opacity = 1
            }, 100)
        }
    })


    input.addEventListener("focus", (e) =>{
        formhead.style.opacity=0
        setTimeout(() => {
            formhead.textContent = e.target.placeholder
            formhead.style.opacity=1
        },200)
    })

    input.addEventListener("blur",()=>{
        formhead.style.opacity = 0
        setTimeout(() => {
            formhead.textContent = "Sign Up"
            formhead.style.opacity=1
        },200)
    })


})


gembok.forEach((lock)  => {
    lock.addEventListener("click", () => {
        lock.classList.toggle("fa-lock-open")
        lock.classList.contains("fa-lock-open") ? 
        (lock.previousElementSibling.type="text") : 
        (lock.previousElementSibling.type="password")
    })
})