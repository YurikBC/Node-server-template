import routerActor from './routerActor';
import renderActor from './renderActor';
import userActor from './auth/userActor';
import serverActor from './serverActor';
import regPage from './auth/registrationPage'
import loginPageActor from './auth/loginPage';
import secondPageActor from './secondPage/secondPage';
import thirdPageActor from './thirdPage/thirdPage'
import constants from '../constants'

const {
    ROUTER_ACTOR,
    RENDER_ACTOR,
    USER_ACTOR,
    SERVER_ACTOR,
    SECOND_PAGE_ACTOR,
    THIRD_PAGE_ACTOR,
    REGISTRATION_ACTOR,
    LOGIN_ACTOR
} = constants

const actorList = {
    [ROUTER_ACTOR]: routerActor,
    [RENDER_ACTOR]: renderActor,
    [USER_ACTOR]: userActor,
    [SERVER_ACTOR]: serverActor,
    [LOGIN_ACTOR]: loginPageActor,
    [SECOND_PAGE_ACTOR]: secondPageActor,
    [THIRD_PAGE_ACTOR]: thirdPageActor,
    [REGISTRATION_ACTOR]: regPage,
    [REGISTRATION_ACTOR]: regPage
}

export default actorList