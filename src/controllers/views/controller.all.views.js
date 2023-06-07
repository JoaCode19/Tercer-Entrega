import { productsRepository } from "../../repositories/product.repositorie.js";

import {
  PATH_NEW_PRODUCT,
  PATH_PRODUCT,
  PATH_CARTS,
  PATH_LOGIN,
  PATH_REGIS,
  PATH_CHAT,
} from "../../config/config.js";
import { cmg } from "../../dao/mongoose/cart.dao.mg.js";
import { mmg } from "../../dao/mongoose/messages.manager.mg.js";

export async function newProductView(req, res, next) {
  try {
    res.render(PATH_NEW_PRODUCT, {
      style: "style-newprod",
      faviconTitle: "Add Products",
      Head: "New Product",
    });
  } catch (error) {
    return next(error.message);
  }
}

export async function productView(req, res) {
  const urlsrt = `http://localhost:8080${req.originalUrl}`;
  const products = await productsRepository.getPaginatedElements(
    req.query,
    urlsrt
  );
  let cartid;
  let usrrole;
  if (req.session.passport) {
    cartid = req.session.passport.user.cart;
    usrrole = req.session.passport.user.role;
  } else {
    cartid = req.user.cart;
    usrrole = req.user.role;
  }

  const validrole = usrrole === "admin" || usrrole === "super-admin" ? 1 : 0;
  const validchat = usrrole === "user" ? 1 : 0;
  res.render(PATH_PRODUCT, {
    role: validrole,
    chat: validchat,
    cart: cartid,
    style: "style-base",
    faviconTitle: "Home",
    list: products,
    listExist: products.payload.length > 0,
  });
}

export async function cartView(req, res) {
  const products = await cmg.getProductsInCartById(req.params.cid);
  res.render(PATH_CARTS, {
    style: "style-cart",
    faviconTitle: "Cart",
    Head: "Cart Shopping",
    list: products,
    listExist: products.length > 0,
    cid: req.params.cid,
  });
}

export async function loginView(req, res) {
  res.render(PATH_LOGIN, {
    style: "style-login",
    faviconTitle: "Login",
  });
}

export async function regisView(req, res) {
  res.render(PATH_REGIS, {
    style: "style-register",
    faviconTitle: "Regis",
  });
}

export async function chatView(req, res) {
  const mensajes = await mmg.findMsg();
  res.render(PATH_CHAT, {
    faviconTitle: "Chat",
    Head: "Chat",
  });
}
