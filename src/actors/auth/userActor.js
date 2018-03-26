import constants from '../../constants'

const {
    USER_ACTOR,
    TOKEN_NAME_IN_STORAGE,
    USER_INFO_IN_STORAGE
} = constants;


const get = {
  token (state) {
    state.token = window.sessionStorage.getItem(TOKEN_NAME_IN_STORAGE);
    return state;
  },
  userInfo () {
    let info = sessionStorage.getItem(USER_INFO_IN_STORAGE);
    return JSON.parse(info)
  }
}

const set = {
  token (state, token) {
    sessionStorage.setItem(TOKEN_NAME_IN_STORAGE, token);
  },
  userInfo (state, value) {
    let userInfo = {...state, ...value};
    delete userInfo['password'];
    delete userInfo['token'];
    sessionStorage.setItem(USER_INFO_IN_STORAGE, JSON.stringify(userInfo));
  }
}

let userActor = {
    name: USER_ACTOR,
    init () {
        return {
            token: null
        }
    },
    get (state, type) {
      switch (type) {
        case TOKEN_NAME_IN_STORAGE:
          return get.token(state)
        case USER_INFO_IN_STORAGE:
          return get.userInfo()
      }
    },
    set (state, [type, value]) {
      switch (type) {
        case TOKEN_NAME_IN_STORAGE:
          return set.token(value)
        case USER_INFO_IN_STORAGE:
          return set.userInfo(state, value)
      }
    }
}

export default userActor