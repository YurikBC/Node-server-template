import actor from './actor'

function ready () {
    let el = document.getElementById('button')
    el.addEventListener('click', onclick)
}

function onclick() {
    actor.callFunction()
}

document.addEventListener("DOMContentLoaded", ready)