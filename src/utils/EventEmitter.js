let address = {};

class EventEmitter {
    emit (eventName, data) {
        ( address[eventName] || [] ).forEach(fn => {
            fn(data)
            console.log(fn)
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
