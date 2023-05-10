//Layouts
import  HeaderOnly  from "../component/Layout/HeaderOnly";

// Pages
import Following from "../pages/Following";
import Upload from "../pages/Upload";
import Search from "../pages/Search";
import Header from "../component/Layout/components/Header";

// Public Routes
const publicRoutes = [
  { path: "/", component: Header },
  { path: "/following", component: Following },
  { path: "/upload", component: Upload, layout: HeaderOnly },
  { path: "/search", component: Search, layout: null }
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
