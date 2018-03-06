import actorList from './actors/actorList'
import Actor from './Actor';

function ActorFactory () {}

ActorFactory.prototype = {
    constructor: ActorFactory,
    create (type) {
        if (actorList[type]) {
            let actorName = actorList[type];
            return Actor.start(actorName);
        }
    },
    remove (type) {
        let actorName = actorList[type].name;
        return Actor.end(actorName);
    }
}

export default ActorFactory