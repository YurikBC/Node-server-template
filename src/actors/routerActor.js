import routes from '../../src/router/routerConfig';
import Actor from '../Actor'

const findRouteData = routes => {
    return routes.filter((route) => {
        return window.location.hash === route.adress
    })
};

let routerActor = {
    name: 'routerActor',
    init () {
        window.addEventListener('hashchange', this.paintEvent)
        this.paintEvent ()
        return {}
    },
    go (state, route) {
        window.location.hash = route.adress
    },
    paintEvent () {
        let currentRoute = findRouteData(routes);
        !currentRoute.length
            ? Actor.send('renderActor', ['paint', [routes[0]]])
            : Actor.send('renderActor', ['paint', [currentRoute[0]]])
    }
};

export default routerActor