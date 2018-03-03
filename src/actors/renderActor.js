let renderActor = {
    name: 'renderActor',
    init () {
        let state = {}
        state.mainEl = document.getElementById('a-app')
        return state
    },
    paint (state, currentRoute) {
        if (state.mainEl) {
            state.mainEl.innerHTML = currentRoute.template
        }
    }
};

export default renderActor