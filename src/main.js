import Actor from './Actor';
import routerActor from './actors/routerActor';
import renderActor from './actors/renderActor';
import routes from './router/routerConfig'

document.addEventListener('DOMContentLoaded', () => {
    Actor.start(renderActor);
    Actor.start(routerActor);
    activateNavigation()
});

function activateNavigation () {
    let el = document.getElementById('nav');
    let childrens = [...el.children]
    for (let i in childrens) {
        childrens[i].addEventListener('click', (event) => {
            Actor.send('routerActor', ['go', routes[+event.target.innerText - 1]])
        })
    }
}


var Shapes =
    {
        Circle: function (param)
        {
            console.log("new " + param.color + " circle created with radius " + param.radius + "px");
        },
        Square: function (param)
        {
            console.log("new " + param.color + " square created with " + param.side + "px on a side ");
        },
        Triangle: function (param)
        {
            console.log("new " + param.color + " triangle created with " + param.side + "px on a side ");
        }
    }


class ShapeFactory {
    constructor (type) {
        this.type = type;
        this.pageActor = null
    }
    create () {
        this.pageActor = new Shapes.Circle({ radius: this.type / 2, color: this.type});
        return this.pageActor
    }
    remove () {
        delete this.pageActor
    }
}


let x = new ShapeFactory('first')
x.create()
x.remove()
console.log(x)


