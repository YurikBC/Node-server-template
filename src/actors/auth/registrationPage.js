const state = {};

let regPageActor = {
    name: 'regPageActor',
    init () {
        state.button = document.querySelector('[data-item="button"]')
        state.emailForm = document.querySelector('[data-item="form__email"]')
        state.passwordForm = document.querySelector('[data-item="form__password"]')

        state.button.addEventListener('click', () => {
            this.post(state)
        })
        return state
    },
    count (state) {
        let http = new XMLHttpRequest();
        http.open('GET', '/api/user', false);
        http.onreadystatechange = function () {
            console.log(http.response)
            console.log('dfvdfv')
        };
        http.send()
    },
    post (state) {
        let email = state.emailForm.value
        let password = state.passwordForm.value
        let http = new XMLHttpRequest();
        let params = `email=${email}&password=${password}`;

        http.open('POST', '/api/user', true);
        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        http.send(params);
        http.onload = () => {
            let response = JSON.parse(http.response);
            sessionStorage.setItem('token', response.token)
        }
    }
};

export default regPageActor