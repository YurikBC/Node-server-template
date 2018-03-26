import Actor from '../../Actor'
import methods from '../../utils/_methods'
import constants from '../../constants'

const {
  SECOND_PAGE_ACTOR,
  USER_INFO_IN_STORAGE,

  USER_ACTOR
} = constants;

const {
    getElementByItem
} = methods;

let state = {}

let mainPageActor = {
    name: SECOND_PAGE_ACTOR,
    init () {
      let el = getElementByItem("cont-text");
      let x = Actor.send(USER_ACTOR, ['get', USER_INFO_IN_STORAGE]);
      el.innerText = `Hello, ${x.firstname} ${x.secondname}`;
    },
    validateForm () {
      state.formValue.innerText = state.form.value
    }
};

export default mainPageActor