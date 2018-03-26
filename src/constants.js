// list of actors
const ROUTER_ACTOR = 'routerActor';
const RENDER_ACTOR = 'renderActor';
const USER_ACTOR = 'userActor';
const SERVER_ACTOR = 'serverActor';
const REGISTRATION_ACTOR = 'regPageActor';
const LOGIN_ACTOR = 'loginPageActor';
const FIRST_PAGE_ACTOR = 'firstPageActor';
const SECOND_PAGE_ACTOR = 'mainPageActor';
const THIRD_PAGE_ACTOR = 'thirdPageActor';

// pages
const LOGIN = 'Login';
const LOGIN_URL = 'login';

const REGISTRATION = 'Registration';
const REGISTRATION_URL = 'registration';


const MAIN_PAGE = 'main';

const MAIN_PAGE_URL = '/';

const SECOND_PAGE = 'SecondPage';
const SECOND_PAGE_URL = 2;

const THIRD_PAGE = 'thirdPage';
const THIRD_PAGE_URL = 3;

const TOKEN_NAME_IN_STORAGE = 'token';
const USER_INFO_IN_STORAGE = 'userInfo';

// requests

const LOGIN_API = '/api/user';
const REGISTRATION_API = '/api/auth';

// numbers
const PAGE_DELAY_TIME = 700;

export default {
  ROUTER_ACTOR,
  RENDER_ACTOR,
  USER_ACTOR,
  SERVER_ACTOR,
  FIRST_PAGE_ACTOR,
  SECOND_PAGE_ACTOR,
  THIRD_PAGE_ACTOR,
  REGISTRATION_ACTOR,
  LOGIN_ACTOR,

  LOGIN,
  REGISTRATION,
  SECOND_PAGE,
  THIRD_PAGE,
  MAIN_PAGE,

  LOGIN_URL,
  REGISTRATION_URL,
  SECOND_PAGE_URL,
  THIRD_PAGE_URL,
  MAIN_PAGE_URL,

  TOKEN_NAME_IN_STORAGE,
  USER_INFO_IN_STORAGE,

  LOGIN_API,
  REGISTRATION_API,

  PAGE_DELAY_TIME
}