import EventEmitter from './EventEmitter';

const eventEmitter = new EventEmitter();

let actorAdresses = {}

const Actor = {
    start (behavior) {
        const address = Symbol();
        let state = typeof behavior.init === "function" ? behavior.init() : {};

        eventEmitter.on(address, function([method, message]) {
            state = behavior[method](state, message) || state;
        });

        actorAdresses[behavior.name] = address

        return address;
    },

    send (target, message) {
        let adress = target
        if (typeof target === 'string') {
            adress = actorAdresses[target]
        }
        eventEmitter.emit(adress, message);
    }
};

export default Actor;
