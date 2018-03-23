import Actor from '../../Actor'
import methods from '../../utils/_methods'

const {
    getElementByItem
} = methods;

let state = {}

let secondPageActor = {
    name: 'secondPageActor',
    init () {
      let el = getElementByItem("container")
      console.log(el)
    },
    validateForm () {
        state.formValue.innerText = state.form.value
    }
};

export default secondPageActor