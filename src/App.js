import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import { DefaultLayout } from "./component/Layout";
import { Fragment } from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if ((route.layout = null)) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
          {/* <Route
            path={routesConfig.home}
            element={
              <DefaultLayout>
                <Home />
              </DefaultLayout>
            }
          />
          <Route
            path={routesConfig.following}
            element={
              <DefaultLayout>
                <Following />
              </DefaultLayout>
            }
          />
          <Route path={routesConfig.upload} element={<Upload />} />
          <Route path={routesConfig.search} element={<Search />} />
          <Route
            exact
            path={routesConfig.profile}
            element={
              <DefaultLayout>
                <Profile />
              </DefaultLayout>
            }
          /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
//Ctrl + Shift +P // => Wrap => name project
