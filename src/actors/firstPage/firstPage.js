const state = {};

let firstPageActor = {
    name: 'firstPageActor',
    init () {
        state.button = document.querySelector('[data-item="button"]')
        state.buttonPost = document.querySelector('[data-item="buttonPost"]')
        state.indicator = document.querySelector('[data-item="indicator"]')

        state.button.addEventListener('click', () => {
            this.count()
        })
        state.buttonPost.addEventListener('click', () => {
            this.post()
        })
        return state
    },
    count (state) {
        let http = new XMLHttpRequest();
        http.open('GET', '/api/get_user', false);
        http.onreadystatechange = function () {
            console.log(http.response)
            console.log('dfvdfv')
        };
        http.send()
    },
    post () {
        let http = new XMLHttpRequest();
        var params = "email=ipsum&password=binny";
        http.open('POST', '/api/set_user', true);
        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        http.send(params)
        http.onreadystatechange = () => {
            console.log(http.status)
        }
    }
};

export default firstPageActor