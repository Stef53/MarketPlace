import ProductPage from "./pages/ProductPage.js";
import ShopPage from "./pages/ShopPage.js";
import { PRODUCT_ROUTE, SHOP_ROUTE } from "./utils/consts.js";

export const routes = [
  {
    path: SHOP_ROUTE,
    Component: ShopPage
  },
  {
    path: PRODUCT_ROUTE + '/:id',
    Component: ProductPage
  },
]