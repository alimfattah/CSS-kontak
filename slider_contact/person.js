const persons = [
    {
        index: 1,
        fullName: "Alex",
        position: "SVP, Head of Product",
        image: "images/person-1.jpg"
    },
    {
        index: 2,
        fullName: "Bobby",
        position: "Chief Revenue Officer",
        image: "images/person-2.jpg"
    },
    {
        index: 3,
        fullName: "Cheng",
        position: "Head of Commerce",
        image: "images/person-3.jpg"
    },
    {
        index: 4,
        fullName: "Dani",
        position: "Co-Founder",
        image: "images/person-4.jpg"
    },
    {
        index: 5,
        fullName: "Emilia",
        position: "Head of Design",
        image: "images/person-5.jpg"
    },
    {
        index: 6,
        fullName: "Finnich",
        position: "Founder",
        image: "images/person-6.jpg"
    },
    {
        index: 7,
        fullName: "Gabriel",
        position: "Head of Information",
        image: "images/person-7.jpg"
    },
    {
        index: 8,
        fullName: "Harry",
        position: "Head of Digital Platform",
        image: "images/person-8.jpg"
    },
    {
        index: 9,
        fullName: "Isaac",
        position: "Head of Business Relation",
        image: "images/person-9.jpg"
    },
    {
        index: 10,
        fullName: "Jacob",
        position: "Head of Infrastructure",
        image: "images/person-10.jpg"
    }
] 

const slider = document.querySelector('.slider')

persons.forEach(({index, fullName, position, image}) => {
    slider.insertAdjacentHTML("beforeend", 
        `<div class="slide" data-index=${index} title="Make Active">
        <i class="bx bxl-linkedin icon"></i>
        <img src=${image} alt=${image.split('/')[1].split('.')[0]} />
        <h2 class="full-name">${fullName}</h2>
        <h3 class="position">${position}</h3>
        </div>`,
    )
})


const elements = {
    slider,
    slides: [...document.querySelectorAll('.slide')],
}

export default elements
