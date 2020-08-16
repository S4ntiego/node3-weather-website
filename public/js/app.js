//fetch przechwytuje dane z API, jak przechwyci to uzywamy then((response))
//=>zeby to response, czyli odpowiedz w formie json nastepnie przekazac do innej funkcji
//ktora zrobi parse na ten json czyli zamieni go w js i bedzie mozna uzywac
// tych danych na nasze potrzeby dlatego uzywamy response.json().then(data)
fetch('http://puzzle.mead.io/puzzle').then((response) => {
// response.json() nigdy nie przyjmuje argumentów
//.then((data) => data to uniwersalny callback dla okreslenia danych, ta czesc
// funkcji odpowiada za to co chcemy dalej zrobic z tymi danymi    
    response.json().then((data) => {
        console.log(data)
    })
})

fetch('http://localhost:3000/weather?address=').then((response) => {
    response.json().then((data) => {
        if (data.error){
            console.log(data.error)
        } else {
            console.log(data.location)
            console.log(data.forecast)
        }
        
    })
})

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

// messageOne.textContent = 'dasdsa'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/weather?address=' + search.value).then((response) => {
    response.json().then((data) => {
        if (data.error){
            messageTwo.textContent = data.error
        } else {
            messageTwo.textContent = data.location
            messageTwo.textContent = data.forecast
        }
        
    })
})

    console.log(location)
})