let state = {}

let secondPageActor = {
    name: 'secondPageActor',
    init () {
        state.form = document.querySelector('[data-item="form"]')
        state.formValue = document.querySelector('[data-item="formValue"]')
        state.form.addEventListener('input', () => {
            this.validateForm()
        })
    },
    validateForm () {
        state.formValue.innerText = state.form.value
    }
};

export default secondPageActor