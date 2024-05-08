import React, { Suspense, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Spin } from "antd";
const HomePage = React.lazy(() => import("./Pages/HomePage"));
const ProductsCom = React.lazy(() =>
  import("./Pages/FirstStoreComponentsHere/ProductsCom")
);
const Login = React.lazy(() => import("./Components/Login & SignUp/Login.jsx"));
const ShopPagewithAdvertisement = React.lazy(() =>
  import("./Pages/ShopPagewithAdvertisement")
);
const ShopPageSingle = React.lazy(() => import("./Pages/ShopPageSingle"));
export const ToggleAdvertisedMenu = React.createContext(null);
function App() {
  const [togglemenu, setToggleMenu] = useState(false);
  return (
    <React.Fragment>
      <div className="App">
        <ToggleAdvertisedMenu.Provider value={{ togglemenu, setToggleMenu }}>
          <Router>
            <Routes>
              <Route
                path="/"
                element={
                  <Suspense
                    fallback={
                      <Spin
                        size="large"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          minHeight: "100vh",
                        }}
                      />
                    }
                  >
                    <HomePage />
                  </Suspense>
                }
              />
              <Route
                path="/"
                element={
                  <Suspense
                    fallback={
                      <Spin
                        size="large"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          minHeight: "100vh",
                        }}
                      />
                    }
                  >
                    <Login />
                  </Suspense>
                }
              />
              <Route
                path="/products"
                element={
                  <Suspense
                    fallback={
                      <Spin
                        size="large"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          minHeight: "100vh",
                        }}
                      />
                    }
                  >
                    <ProductsCom />
                  </Suspense>
                }
              />
              <Route
                path="/shoppage"
                element={
                  <Suspense
                    fallback={
                      <Spin
                        size="large"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          minHeight: "100vh",
                        }}
                      />
                    }
                  >
                    <ShopPagewithAdvertisement />
                  </Suspense>
                }
              />
              <Route
                path="/shoppagesingle/:index"
                element={
                  <Suspense
                    fallback={
                      <Spin
                        size="large"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          minHeight: "100vh",
                        }}
                      />
                    }
                  >
                    <ShopPageSingle />
                  </Suspense>
                }
              />
              <Route
                path="/*"
                element={<h1>Error hay routes set karrrrr 404</h1>}
              />
            </Routes>
          </Router>
        </ToggleAdvertisedMenu.Provider>
      </div>
    </React.Fragment>
  );
}
export default App;
