// Challenge 1
document.addEventListener("DOMContentLoaded", function() {
    fetchImg()
    fetchAllDogBreeds()
    setUpFilter()
    changeColor()
    addBreeds()
});

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

function fetchImg() {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImg(json.message))
}

function renderImg(imagesArray) {
    imagesArray.forEach((image) => {
        const img = document.createElement("img")
        img.src = image
        document.body.appendChild(img)
    })
}

// Challenge 2
const breedUrl = "https://dog.ceo/api/breeds/list/all"

function fetchAllDogBreeds() {
    fetch(breedUrl) 
        .then(resp => resp.json())  
        .then(json => addBreeds(json.message)) 
}

function addBreeds(breeds) {
    const ul = document.querySelector("#dog-breeds")
    Object.keys(breeds).forEach((breed) => {
        const li = document.createElement("li")
        li.textContent = breed
        ul.appendChild(li)
    })

document.querySelectorAll("li").forEach((li) =>
li.addEventListener("click", (event) => 
changeColor(event)))
}

function changeColor(event) {
    console.log(event.target)
    event.target.style.color = "green"
}

function setUpFilter() {
    const selectBox = document.querySelector('select')
    selectBox.addEventListener("change", (event) => 
    filterBreeds(event))
}

function filterBreeds(event) {
    console.log(event.target.value)
    const letter = event.target.value
    const ul = document.querySelector("ul")
    ul.innerHTML = ""
    fetchSomeDogBreeds(letter)
}

function fetchSomeDogBreeds(letter) {
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(json => {
            const breedArray = Object.keys(json.message)
            const filteredBreeds = breedArray.filter((breed) =>
        breed.startsWith(letter))
            addFilteredBreeds(filteredBreeds)
        })
}

function addFilteredBreeds(breeds) {
    const ul = document.querySelector("ul")
    breeds.forEach((breed) => {
        const li = document.createElement('li')
        li.textContent = breed
        ul.appendChild(li)
    })
    document.querySelectorAll("li").forEach((li) =>
    li.addEventListener("click", (event) =>
    changeColro(event)))
}
console.log('%c HI', 'color: firebrick')
