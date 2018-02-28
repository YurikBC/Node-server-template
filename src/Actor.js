import EventEmitter from './EventEmitter';

const eventEmitter = new EventEmitter();

const Actor = {
    start(behavior) {
        const address = Symbol();
        let state = typeof behavior.init === "function" ? behavior.init() : {};

        eventEmitter.on(address, function([method, message]) {
            state = behavior[method](state, message) || state;
        });

        return address;
    },

    send(target, message) {
        eventEmitter.emit(target, message);
    }
};

export default Actor;
