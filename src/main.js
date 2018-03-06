import Actor from './Actor';
import routes from './router/routerConfig'
import ActorFactory from './ActorFactory'

let factory
let render, router
document.addEventListener('DOMContentLoaded', () => {
    factory = new ActorFactory();

    factory.create('renderActor');
    factory.create('routerActor');
    activateNavigation()
});

window.onbeforeunload = () => {
    factory.remove('renderActor');
    factory.remove('routerActor');
};


function activateNavigation () {
    let el = document.getElementById('nav');
    let childrens = [...el.children];
    for (let i in childrens) {
        childrens[i].addEventListener('click', (event) => {
            Actor.send('routerActor', ['go', routes[+event.target.innerText - 1]])
        })
    }
}


