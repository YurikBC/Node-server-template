class EventEmitter {
    constructor() {
        this.address = {};
    };

    emit (eventName, data) {
        ( this.address[eventName] || [] ).forEach(fn => {
            fn.call(null, data);
        });
    };

    on (eventName, fn) {
        if(!this.address[eventName]) {
            this.address[eventName] = [];
        }
        this.address[eventName].push(fn);
    };
    off (adr) {
        this.address[adr] = null
    }
}


export default EventEmitter;
