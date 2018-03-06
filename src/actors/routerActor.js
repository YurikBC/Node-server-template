import routes from '../../src/router/routerConfig';
import Actor from '../Actor'
import ActorFactory from '../ActorFactory'

const findRouteData = routes => {
    return routes.filter((route) => {
        return window.location.hash.replace('#', '') === route.address
    })
};

const onHashChange = Symbol('onHashChange');
let oldPage;
let actors = {};

let routerActor = {
    name: 'routerActor',
    init () {
        window.addEventListener('hashchange', this[onHashChange]);
        oldPage = routes[0];
        this[onHashChange]();
        return {}
    },
    go (_, route) {
        window.location.hash = route.address;
    },
    [onHashChange] () {
        let foundedRoute = findRouteData(routes);
        let newPage = !foundedRoute.length ? routes[0] : foundedRoute[0];

        Actor.send('renderActor', ['paint', newPage]);

        actors[newPage.controller.name] = new ActorFactory();
        actors[newPage.controller.name].create(newPage.controller.name);

        if (newPage.name !== oldPage.name && actors[oldPage.name]) {
            actors[oldPage.name].remove(oldPage.name)
        }

        oldPage = newPage
    }
};

export default routerActor