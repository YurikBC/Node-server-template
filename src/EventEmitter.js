let subscribed = {}

class EventEmitter {
    on (adress, obj, cb) {
        if (!subscribed[adress]) {
            subscribed[adress] = {
                cb: cb,
                subscribers: [obj]
            }
        } else {
          subscribed[adress]['subscribers'].push(obj)
        }
    }
    off (adress, obj) {
        subscribed[adress]['subscribers'].forEach ((subObj, index) => {
            if (subObj.id === obj.id) {
                subscribed[adress]['subscribers'].splice(index, 1)
            }
        })
    }
    emit (adress) {
        for (let i in subscribed[adress].subscribers) {
            let obj = subscribed[adress].subscribers[i]
            subscribed[adress].cb(obj.personId)
        }
    }
}

export default EventEmitter