import EventEmitter from './EventEmitter'
import Person from './Person'

var person
var person1
var person2
var person3
var person4
var person5
var mailService

function ready () {
   let el = document.getElementById('button')
   el.addEventListener('click', buttonAction)
   createPersons()
}

function createPersons () {
    mailService = new EventEmitter()
    person = new Person (0)
    person1 = new Person (1)
    person2 = new Person (2)
    person3 = new Person (3)
    person4 = new Person (4)
    person5 = new Person (5)

    mailService.on("sentMail", person, function (send) {
        alert('Sent main to ' + send)
    })
    mailService.on("sentMail", person1, function (send) {
        alert('Sent main to ' + send)
    })
    mailService.on("sentMail", person5, function (send) {
        alert('Sent main to ' + send)
    })
    mailService.on("sentPicture", person3, function (send) {
        alert('Sent main to ' + send)
    })
}

function buttonAction () {
    mailService.off("sentMail", person1)
    mailService.emit("sentMail")
    mailService.emit("sentPicture")
}


document.addEventListener('DOMContentLoaded', ready)