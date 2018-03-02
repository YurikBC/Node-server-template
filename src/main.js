import Actor from './Actor';
import routerActor from './actors/routerActor';
import renderActor from './actors/renderActor';
import routes from './router/routerConfig'

document.addEventListener('DOMContentLoaded', () => {
    Actor.start(renderActor);
    Actor.start(routerActor);
});

setTimeout(() => {
    Actor.send('routerActor', ['go', routes[2]])
}, 3000);

