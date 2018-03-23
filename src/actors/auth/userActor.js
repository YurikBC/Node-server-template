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
    setUser (state, user) {
        state = {...state, ...user}
        if (state.token) {
          sessionStorage.setItem(TOKEN_NAME_IN_STORAGE, state.token)
        }
    }
}

export default userActor