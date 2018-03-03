import Actor from '../../Actor'

let thirdPageActor = {
    name: 'thirdPageActor',
    init () {
        let button = document.querySelector('[data-item="button"]')
        button.addEventListener('click', () => {
            Actor.send('thirdPageActor', ['triggerAlert', event])
        });
        return {
            button: button
        }
    },
    triggerAlert (state, col) {
        console.log(state, col)
    }
};

export default thirdPageActor