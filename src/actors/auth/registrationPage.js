const state = {};
import constants from '../../constants'
import Actor from '../../Actor'
import methods from  '../../utils/_methods'

const {
    getElementByItem
} = methods

const {
    REGISTRATION_ACTOR,
    SERVER_ACTOR,
    ROUTER_ACTOR,
    USER_ACTOR
} = constants

const getFormData = (state) => {
    let value = {
        firstName: state.formFirstName.value,
        secondName: state.formSecondName.value,
        email: state.formEmail.value,
        password: state.formPassword.value,
    }
    let params = `firstName=${value.firstName}` +
        `&secondName=${value.secondName}` +
        `&email=${value.email}` +
        `&password=${value.password}`;
    return params


}

function validateForm (value) {
    let form = value.target ? value.target : value
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
}

const validateForms = (state) => {
    let keys = Object.keys(state)
    let isAllFormsValid = keys.filter((key) => {
        return validateForm(state[key]);
    })
    return isAllFormsValid.length === 0
}

let regPageActor = {
    name: REGISTRATION_ACTOR,
    init () {
        let button = getElementByItem("button__submit");
        state.formFirstName = getElementByItem("form__firstName");
        state.formSecondName = getElementByItem("form__secondName");
        state.formEmail = getElementByItem("form__email");
        state.formPassword = getElementByItem("form__password");
        state.formRepeatPassword = getElementByItem("form__repeat-password");

        let keys = Object.keys(state);
        keys.filter((key) => {
            state[key].addEventListener('input', validateForm)
        });

        button.addEventListener('click', () => {
            this.submit(state)
        });
        return state
    },
    submit (state) {
        let isValid = validateForms(state);
        let messageEl = getElementByItem("message-alert");
        messageEl.classList.remove('alert-danger')

        // if (isValid) {
            let value = getFormData(state);
            Actor.send(SERVER_ACTOR, ['post', value]).then((response) => {
                let res = JSON.parse(response);

                Actor.send(USER_ACTOR, ['setToken', res.token])

                messageEl.classList.add('alert-success');
                messageEl.style.display = 'block';
                setTimeout(() => {
                    Actor.send(ROUTER_ACTOR, ['go', {address: '/'}])
                }, 850)
            }).catch((response) => {
                messageEl.classList.add('alert-danger');
                messageEl.innerText = response
                messageEl.style.display = 'block';
            })
        // }
    }
};

export default regPageActor