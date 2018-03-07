import constants from '../../constants'
const {
    USER_ACTOR,
    TOKEN_NAME_IN_STORAGE
} = constants

let userActor = {
    name: USER_ACTOR,
    init () {
        return {}
    },
    checkToken (state) {
        let string = 'fvjdfvnjdfnvjkdfvkjd'
        return string
    },
    checkTokens (state) {
        alert('f')
        let x = Promise((resolve))
        x.resolve('fdvdfvdf')
    }
}

export default userActor