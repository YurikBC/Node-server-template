import routes from '../../src/router/routerConfig';
import Actor from '../Actor'

const findRouteData = routes => {
    return routes.filter((route) => {
        return window.location.hash.replace('#', '') === route.address
    })
};

const onHashChange = Symbol('onHashChange');
let oldRoute

let routerActor = {
    name: 'routerActor',
    init () {
        window.addEventListener('hashchange', this[onHashChange]);
        oldRoute = routes[0];
        this[onHashChange]();
        return {}
    },
    go (state, route) {
        window.location.hash = route.address;
    },
    [onHashChange] () {
        let currentRoute = findRouteData(routes);
        let newRoute = !currentRoute.length ? routes[0] : currentRoute[0];

        Actor.send('renderActor', ['paint', newRoute]);
        Actor.start(newRoute.controller);

        if (newRoute.name !== oldRoute.name) {
            Actor.end(oldRoute.name)
        }

        oldRoute = newRoute
    }
};

export default routerActor