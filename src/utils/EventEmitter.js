let address = {};

class EventEmitter {
    emit (eventName, data) {
        let result
        ( address[eventName] || [] ).forEach(fn => {
            result = fn(data)
        });
        return result
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
