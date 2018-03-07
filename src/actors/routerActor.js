import routes from '../../src/router/routerConfig';
import Actor from '../Actor'
import ActorFactory from '../ActorFactory'
import constants from '../constants'

const {
    USER_ACTOR
} = constants

const findRouteData = routes => {
    return routes.filter((route) => {
        return window.location.hash.replace('#', '') === route.address
    })
};

const onHashChange = Symbol('onHashChange');
let actors = {};

let routerActor = {
    name: 'routerActor',
    init () {
        window.addEventListener('hashchange', this[onHashChange]);
        this[onHashChange]();
        return {}
    },
    go (_, route) {
        window.location.hash = route.address;
    },
    [onHashChange] () {
        let foundedRoute = findRouteData(routes);
        let newPage = !foundedRoute.length ? routes[0] : foundedRoute[0];

        Actor.send(USER_ACTOR, ['checkToken'])
        let token = true
        if (!token) {  window.location.hash = routes[0].address; }
        if (token || newPage.name === 'Login') {
            Actor.send('renderActor', ['paint', newPage]);

            let factory = new ActorFactory();
            factory.create(newPage.controller.name)
        }
    }
};


export default routerActor