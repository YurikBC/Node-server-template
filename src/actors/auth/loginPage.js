import constants from '../../constants'
import Actor from '../../Actor'
import methods from  '../../utils/_methods'

const {
  getElementByItem
} = methods

const {
    LOGIN_ACTOR,
    SERVER_ACTOR,
    ROUTER_ACTOR,
    USER_ACTOR,

    MAIN_PAGE_URL
} = constants
const state = {};

function validateLoginForms (state) {
  let formCollection = [state.emailForm, state.passwordForm]
  let result = formCollection.every((form) => {

    form.classList.remove('is-invalid');
    form.classList.remove('is-valid');

    let isValid = form.checkValidity();
    isValid ? form.classList.add('is-valid') : form.classList.add('is-invalid');
    return isValid
  })
  return result
}

function getPostRequestParams (state) {
  let email = state.emailForm.value;
  let password = state.passwordForm.value;
  return email && password ? `email=${email}&password=${password}` : null;
}

function showAlert (type, state, error) {
  let el = state.alertEl
    if (type === 'success') {
      el.classList.add('alert-success');
      el.style.display = 'block';
    }
    if (type === 'error') {
      el.classList.add('alert-danger');
      el.innerText = error
      el.style.display = 'block';
    }
}

let loginPageActor = {
    name: LOGIN_ACTOR,
    init () {
        state.button = getElementByItem("button");
        state.emailForm = getElementByItem("form__email");
        state.passwordForm = getElementByItem("form__password");
        state.alertEl = getElementByItem("message-alert");

        state.button.addEventListener('click', () => {
            this.controller.submitAction(state)
        })
        return state
    },
    controller: {
      submitAction: (state) => {
        let isValid = validateLoginForms(state)
        let url = '/api/user'
        let reqParams = getPostRequestParams(state)

        if (reqParams && isValid) {
          Actor.send(SERVER_ACTOR, ['post', [url, reqParams]]).then((response) => {
            let res = JSON.parse(response)
            // show alert on the page
            showAlert('success', state)

            // Set User
            Actor.send(USER_ACTOR, ['setUser', res])

            // Redirect to the Main Page
            setTimeout(() => {
              Actor.send(ROUTER_ACTOR, ['go', {address: MAIN_PAGE_URL}])
            }, 850)

          }).catch((error) => {
            showAlert('error', state, error)
          })
        }
        // let response = JSON.parse(http.response);
        // sessionStorage.setItem('token', response.token)
      }
    }
};

export default loginPageActor