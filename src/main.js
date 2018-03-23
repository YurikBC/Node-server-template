import Actor from './Actor';
import routes from './router/routerConfig'
import ActorFactory from './ActorFactory'
import methods from './utils/_methods'

const {
  getElementByItem
} = methods

import constants from './constants'
const {
  USER_ACTOR,
  SERVER_ACTOR,
  RENDER_ACTOR,
  ROUTER_ACTOR,

  MAIN_PAGE_URL,
  LOGIN_URL,
  REGISTRATION_URL
} = constants

let factory;
document.addEventListener('DOMContentLoaded', () => {
  factory = new ActorFactory();
  factory.create(SERVER_ACTOR);
  factory.create(USER_ACTOR);
  factory.create(RENDER_ACTOR);
  factory.create(ROUTER_ACTOR);
  activateNavigation()
});

window.onbeforeunload = () => {
  factory.remove(SERVER_ACTOR);
  factory.remove(USER_ACTOR);
  factory.remove(RENDER_ACTOR);
  factory.remove(ROUTER_ACTOR);
};

function activateNavigation () {
  getElementByItem('home-link').href = '#' + MAIN_PAGE_URL;
  getElementByItem('logo-link').href = '#' + MAIN_PAGE_URL;
  getElementByItem('login-link').href = '#' + LOGIN_URL;
  getElementByItem('reg-link').href = '#' + REGISTRATION_URL
}


