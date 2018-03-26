import constants from '../../constants'
import Actor from '../../Actor'
import methods from  '../../utils/_methods'

const {
  getElementByItem
} = methods;

const {
  LOGIN_ACTOR,
  SERVER_ACTOR,
  ROUTER_ACTOR,
  USER_ACTOR,
  MAIN_PAGE_URL,
  TOKEN_NAME_IN_STORAGE,
  USER_INFO_IN_STORAGE,
  LOGIN_API,
  PAGE_DELAY_TIME
} = constants;

const state = {};

let loginPageActor = {
  name: LOGIN_ACTOR,
  init () {
    state.button = getElementByItem("button");
    state.emailForm = getElementByItem("form__email");
    state.passwordForm = getElementByItem("form__password");
    state.alertEl = getElementByItem("message-alert");

    state.button.addEventListener('click', () => {
      this.controller.submitAction(state)
    });
    return state
  },
  controller: {
    submitAction (state) {
      let isValid = validateLoginForms(state);
      let reqParams = getPostRequestParams(state);

      if (reqParams && isValid) {
        Actor.send(SERVER_ACTOR, ['post', [LOGIN_API, reqParams]]).then((response) => {
          let res = JSON.parse(response);
          // show alert on the page
          showAlert('success', state);

          // Set User
          Actor.send(USER_ACTOR, ['set', [TOKEN_NAME_IN_STORAGE, res.token]]);
          Actor.send(USER_ACTOR, ['set', [USER_INFO_IN_STORAGE, res]]);

          // Redirect to the Main Page
          setTimeout(() => {
            Actor.send(ROUTER_ACTOR, ['go', {address: MAIN_PAGE_URL}])
          }, PAGE_DELAY_TIME)

        }).catch((error) => {
          // show alert with error
          showAlert('error', state, error)
        })
      }
    }
  }
};

const validateLoginForms = (state) => {
  let formCollection = [state.emailForm, state.passwordForm];
  return formCollection.every((form) => {

    form.classList.remove('is-invalid');
    form.classList.remove('is-valid');

    let isValid = form.checkValidity();
    isValid ? form.classList.add('is-valid') : form.classList.add('is-invalid');
    return isValid
  })
};

const getPostRequestParams = (state) => {
  let email = state.emailForm.value;
  let password = state.passwordForm.value;
  return email && password ? `email=${email}&password=${password}` : null;
};

const showAlert = (type, state, error) => {
  let el = state.alertEl;
  switch (type) {
    case 'success':
      el.classList.add('alert-success');
      el.style.display = 'block';
      break;
    case 'error':
      el.classList.add('alert-danger');
      el.innerText = error;
      el.style.display = 'block';
      break
  }
};

export default loginPageActor