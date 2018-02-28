class EventEmitter {
    constructor() {
        this.address = {};
    };

    emit(eventName, data) {
        //const event = this.address[eventName];
        // if( event ) {
        //     event.forEach(fn => {
        //         fn.call(null, data);
        //     });
        // }
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
