import loginPage from '../views/auth/login.html'
import regPage from '../views/auth/registration.html'
import mainPageTemplate from '../views/mainPage.html';
import templateThird from '../views/thirdPageTemplate.html';

import loginPageActor from '../actors/auth/loginPage'
import regPageActor from '../actors/auth/registrationPage'
import mainPageActor from '../actors/mainPage/mainPageActor'
import thirdPageActor from '../actors/thirdPage/thirdPage'

import constants from '../constants'
const {
    LOGIN,
    REGISTRATION,
    SECOND_PAGE,
    THIRD_PAGE,
    MAIN_PAGE,

    LOGIN_URL,
    REGISTRATION_URL,
    SECOND_PAGE_URL,
    THIRD_PAGE_URL,
    MAIN_PAGE_URL
} = constants


const routes = [
    {
        name: LOGIN,
        address: LOGIN_URL,
        template: loginPage,
        controller: loginPageActor,
        tokenRequired: false
    },
    {
        name: REGISTRATION,
        address: REGISTRATION_URL,
        template: regPage,
        controller: regPageActor,
        tokenRequired: false
    },
    {
        name: MAIN_PAGE,
        address: MAIN_PAGE_URL,
        template: mainPageTemplate,
        controller: mainPageActor,
        tokenRequired: true
    },
    {
        name: SECOND_PAGE,
        address: SECOND_PAGE_URL,
        template: templateThird,
        controller: mainPageActor,
        tokenRequired: true
    },
    {
        name: THIRD_PAGE,
        address: THIRD_PAGE_URL,
        template: templateThird,
        controller: thirdPageActor,
        tokenRequired: false
    }
]

export default routes