const EventEmitter = class EventEmitter {
    constructor(init) {
        this.init = init
        this.on = function (method, cb) {
            this[method] = cb
        }
        this.off = function (method) {
            this[method] = null
        }
        this.send = function (method) {
            this[method](init)
        }
    }
}

export default EventEmitter