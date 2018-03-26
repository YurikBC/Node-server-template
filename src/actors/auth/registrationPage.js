import constants from '../../constants';
import Actor from '../../Actor';
import methods from  '../../utils/_methods';

const {
    getElementByItem
} = methods;

const {
    REGISTRATION_ACTOR,
    SERVER_ACTOR,
    ROUTER_ACTOR,
    USER_ACTOR,
    REGISTRATION_API,
    PAGE_DELAY_TIME
} = constants;

const state = {};

const regPageActor = {
  name: REGISTRATION_ACTOR,
  init () {
    const button = getElementByItem("button__submit");
    state.formFirstName = getElementByItem("form__firstName");
    state.formSecondName = getElementByItem("form__secondName");
    state.formEmail = getElementByItem("form__email");
    state.formPassword = getElementByItem("form__password");
    state.formRepeatPassword = getElementByItem("form__repeat-password");

    Object.keys(state).filter((key) => {
      state[key].addEventListener('input', validateForm)
    });

    button.addEventListener('click', () => {
      this.controller.submit(state)
    });

    return state
  },
  controller: {
    submit (state) {
      let isValid = validateForms(state);
      regPageActor.view.clearAlertMessage();

      if (isValid) {
        let value = getFormData(state);
        Actor.send(SERVER_ACTOR, ['post', [REGISTRATION_API, value]]).then((response) => {
          let res = JSON.parse(response);

          Actor.send(USER_ACTOR, ['setUser', res.token]);

          setTimeout(() => {
            Actor.send(ROUTER_ACTOR, ['go', {address: '/'}])
          }, PAGE_DELAY_TIME)

        }).catch((response) => {
          regPageActor.view.showError(response)
        })
      }
    }
  },
  view: {
    messageEl: () => getElementByItem("message-alert"),
    clearAlertMessage () {
      this.messageEl().classList.remove('alert-danger')
    },
    showSuccess () {
      this.messageEl().classList.add('alert-success');
      this.messageEl().style.display = 'block';
    },
    showError (error) {
      this.messageEl().classList.add('alert-danger');
      this.messageEl().innerText = error;
      this.messageEl().style.display = 'block';
    }
  }
};

const getFormData = (state) => {
    let value = {
        firstName: state.formFirstName.value,
        secondName: state.formSecondName.value,
        email: state.formEmail.value,
        password: state.formPassword.value,
    };
    let params = `firstName=${value.firstName}` +
        `&secondName=${value.secondName}` +
        `&email=${value.email}` +
        `&password=${value.password}`;
    return params
};

const validateForm = (value) => {
  let form = value.target ? value.target : value;
  form.classList.remove('is-invalid');
  form.classList.remove('is-valid');

  let isValid = form.checkValidity();
  if (form.dataset.item === 'form__repeat-password') {
    if (getElementByItem("form__password").value !== form.value) {
       isValid = false
    }
  }
  isValid ? form.classList.add('is-valid') : form.classList.add('is-invalid');
  return !isValid
};

const validateForms = (state) => {
  let keys = Object.keys(state);
  let isAllFormsValid = keys.filter((key) => {
    return validateForm(state[key]);
  });
  return isAllFormsValid.length === 0
};

export default regPageActor