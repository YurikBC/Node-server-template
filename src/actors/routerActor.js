import routes from '../../src/router/routerConfig';
import Actor from '../Actor'
import ActorFactory from '../ActorFactory'
import constants from '../constants'

const {
    USER_ACTOR,
    ROUTER_ACTOR
} = constants

const onHashChange = Symbol('onHashChange');

const findRouteData = routes => {
    return routes.filter((route) => {
        if (!window.location.hash ) {
          return route.address === '/'
        }
        return window.location.hash.replace('#', '') == route.address
    })
};

const checkForUserRights = (routeObj) => {
    let tokenObj = Actor.send(USER_ACTOR, ['get', 'token'])
    let token = tokenObj.token

    if (!routeObj.tokenRequired) {
        return true
    } else if (routeObj.tokenRequired && token) {
        return true
    }
    return  false
}

let routerActor = {
    name: ROUTER_ACTOR,
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
        let pageToReach = !foundedRoute.length ? routes[0] : foundedRoute[0];
        let isPageReachable = checkForUserRights(pageToReach)

        if (isPageReachable) {
            Actor.send('renderActor', ['paint', pageToReach]);
            let factory = new ActorFactory();
            factory.create(pageToReach.controller.name)
        } else {
            window.location.hash = routes[0].address;
        }
    }
};


export default routerActor