import constants from '../constants'

const {
    SERVER_ACTOR
} = constants


let serverActor = {
    name: SERVER_ACTOR,
    init () {
        return {}
    },
    post (state, value) {
        let http = new XMLHttpRequest();
        let params = value
        http.open('POST', '/api/auth', true);
        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        http.send(params);
        let promise = new Promise ((resolve, reject) => {
            http.onload = () => {
                http.status === 200 ? resolve(http.response) : reject(http.response)
            }
        })
        return promise
    }

}
export default serverActor