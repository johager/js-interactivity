// console.log('test')

const message = document.getElementById('message')

function addMovie(event) {
    event.preventDefault()
    const inputField = document.querySelector('input')
    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')
    movie.appendChild(movieTitle)
    movieTitle.textContent = inputField.value
    document.querySelector('ul').append(movie)
    inputField.value = ''

    movieTitle.addEventListener('click', crossOffMovie)

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    movie.appendChild(deleteBtn)

    deleteBtn.addEventListener('click', deleteMovie)
}

function deleteMovie(event) {
    event.target.parentNode.remove()
    const movieTitle = event.target.parentNode.querySelector('span').textContent
    message.textContent = `${movieTitle}  deleted`
    revealMessage()
}

document.querySelector('form').addEventListener ('submit', addMovie)

function crossOffMovie(event) {
    event.target.classList.toggle('checked')

    const movieTitle = event.target.textContent
    if (event.target.classList.contains('checked')) {
        message.textContent = `${movieTitle} checked-off`
    } else {
        message.textContent = `${movieTitle} unchecked`
    }
    revealMessage()
}

function hideMessage() {
    message.classList.add('hide')
}

function revealMessage() {
    setTimeout(hideMessage, 1000)
    message.classList.remove('hide')
}