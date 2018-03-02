let renderActor = {
    name: 'renderActor',
    init () {
        return document.getElementById('a-app')
    },
    paint (state, [currentRoute]) {
        state.innerHTML = currentRoute.template
    }
};

export default renderActor