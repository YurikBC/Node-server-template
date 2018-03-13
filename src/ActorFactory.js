import actorList from './actors/actorList'
import Actor from './Actor';

function ActorFactory () {}

ActorFactory.prototype = {
    constructor: ActorFactory,
    create (type) {
        if (actorList[type]) {
            let actorObj = actorList[type];
            return Actor.start(actorObj);
        }
    },
    remove (type) {
        let actorObj = actorList[type].name;
        return Actor.end(actorObj);
    }
}

export default ActorFactory