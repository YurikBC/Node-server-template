let address = {};

class EventEmitter {
    emit (eventName, data) {
        ( address[eventName] || [] ).forEach(fn => {
            fn.call(null, data);
        });
    };

    on (eventName, fn) {
        if(!address[eventName]) {
            address[eventName] = [];
        }
        address[eventName].push(fn);
    };
    off (adr) {
        delete address[adr]
    }
}


export default EventEmitter;
