import routerActor from './routerActor';
import renderActor from './renderActor';
import userActor from './auth/userActor';
import serverActor from './serverActor';
import firstPageActor from './auth/loginPage';
import secondPageActor from './secondPage/secondPage';
import thirdPageActor from './thirdPage/thirdPage'
import constants from '../constants'

const {
    ROUTER_ACTOR,
    RENDER_ACTOR,
    USER_ACTOR,
    SERVER_ACTOR,
    FIRST_PAGE_ACTOR,
    SECOND_PAGE_ACTOR,
    THIRD_PAGE_ACTOR
} = constants

const actorList = {
    [ROUTER_ACTOR]: routerActor,
    [RENDER_ACTOR]: renderActor,
    [USER_ACTOR]: userActor,
    [SERVER_ACTOR]: serverActor,
    [FIRST_PAGE_ACTOR]: firstPageActor,
    [SECOND_PAGE_ACTOR]: secondPageActor,
    [THIRD_PAGE_ACTOR]: thirdPageActor
}

export default actorList