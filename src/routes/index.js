import routesConfig from '../config/routes'

//Layouts
import  HeaderOnly  from "../component/Layout/HeaderOnly";

// Pages

import Following from "../pages/Following";
import Upload from "../pages/Upload";
import Search from "../pages/Search";
import Header from "../component/Layout/components/Header";
import Home from '../pages/Home';

// Public Routes
const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.following, component: Following },
  { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
  { path: routesConfig.search, component: Search, layout: null }
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
