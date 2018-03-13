import constants from '../../constants'
const {
    USER_ACTOR,
    TOKEN_NAME_IN_STORAGE
} = constants

let userActor = {
    name: USER_ACTOR,
    init () {
        return {
            token: null
        }
    },
    checkToken (state) {
        state.token = window.sessionStorage.getItem(TOKEN_NAME_IN_STORAGE);
        return state
    },
    setToken (state, token) {
        sessionStorage.setItem('token', token)
    }
}

export default userActor