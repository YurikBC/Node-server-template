const state = {};

let firstPageActor = {
    name: 'firstPageActor',
    init () {
        state.button = document.querySelector('[data-item="button"]')
        state.indicator = document.querySelector('[data-item="indicator"]')

        state.button.addEventListener('click', () => {
            this.count()
        })
        return state
    },
    count (state) {
        alert('fdv')
    }
};

export default firstPageActor