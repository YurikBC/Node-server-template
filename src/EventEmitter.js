class EventEmitter {
    constructor() {
        this.address = {};
    };

    emit(eventName, data) {
        ( this.address[eventName] || [] ).forEach(fn => {
            fn.call(null, data);
        });
    };

    on(eventName, fn) {
        if(!this.address[eventName]) {
            this.address[eventName] = [];
        }
        this.address[eventName].push(fn);
    };

    off(eventName, fn) {
        if(!this.address[eventName]) {
            return;
        }
        this.address[eventName].filter(eventFn => fn !== eventFn);
    };
}


export default EventEmitter;
