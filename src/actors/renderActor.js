let renderActor = {
    name: 'renderActor',
    init () {
        return {
            mainEl: document.getElementById('a-app')
        }
    },
    paint (state, currentRoute) {
        if (state.mainEl) {
            state.mainEl.innerHTML = currentRoute.template
        }
    }
};

export default renderActor