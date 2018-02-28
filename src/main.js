import EventEmitter from './EventEmitter'

var act
var act1
var act2
var act3
function ready () {
   let el = document.getElementById('button')
   el.addEventListener('click', buttonAction)

    act = new EventEmitter (1)
    act.on("channel-name", function (send) {
        alert(send)
    })

}

function buttonAction () {
    act.send("channel-name")
    act.off("channel-name")
}


document.addEventListener('DOMContentLoaded', ready)