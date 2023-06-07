import * as dotenv from "dotenv";

dotenv.config({
  path: "src/config/.env",
});

//server

const PORT = process.env.PORT;

//persitencia
const PERSISTENCIA = process.env.PERSISTENCIA;

const MONGODB_CNX_STR = process.env.MONGODB_CNX_STR;

//auth
const JWT_PRIVATE_KEY = "bocabocaabocaaa";
const COOKIE_KEY = "joacode19";

const CLIENTID_GIT = "Iv1.833d173dd56e2b23";

const CLIENTSCR_GIT = "954d848baebd01377150d426d3f89367eafe345f";

const SESSION_SECRET = "elquenoabrelacabezanolecreceelcorazon";

//views
const PATH_NEW_PRODUCT = process.env.PATH_NEW_PRODUCT;
const PATH_PRODUCT = process.env.PATH_PRODUCT;
const PATH_CARTS = process.env.PATH_CARTS;
const PATH_LOGIN = process.env.PATH_LOGIN;
const PATH_REGIS = process.env.PATH_REGIS;
const PATH_CHAT = process.env.PATH_CHAT;

export {
  PORT,
  PERSISTENCIA,
  MONGODB_CNX_STR,
  COOKIE_KEY,
  JWT_PRIVATE_KEY,
  CLIENTID_GIT,
  CLIENTSCR_GIT,
  SESSION_SECRET,
  PATH_CARTS,
  PATH_LOGIN,
  PATH_NEW_PRODUCT,
  PATH_PRODUCT,
  PATH_REGIS,
  PATH_CHAT,
};
