import constants from '../constants'

const {
    RENDER_ACTOR
} = constants

let renderActor = {
    name: RENDER_ACTOR,
    init () {
        return {
            mainEl: document.getElementById('a-app')
        }
    },
    paint (state, currentRoute) {
        if (state.mainEl) {
            state.mainEl.innerHTML = currentRoute.template
        }
    },
    getState (state) {
        return state
    }
};

export default renderActor