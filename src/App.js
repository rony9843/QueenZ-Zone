import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderSearchBar from "../src/Components/Home/HeaderSearchBar";
import Layout from "../src/Components/Home/Layout";
import "./App.css";
import CatagoryProduct from "./Components/CategoryPoduct/CatagoryProduct";
import MainDashboard from "./Components/Dashboard/MainDashboard/MainDashboard";
import FavoritePage from "./Components/Favorite/FavoritePage";
import MyAccount from "./Components/MyAccount/MyAccount";
import MyMessage from "./Components/MyMessage/MyMessage";
import NaviBar from "./Components/NaviBar/NaviBar";
import Order from "./Components/Order/Order";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import ShoppingCardPage from "./Components/ShoppinfCard/ShoppingCardPage";

// user info create context
export const UserInfoContext = createContext();

function App() {
  const [loggingUserInfo, setLoginUsserInfo] = useState({});

  console.log(loggingUserInfo);

  return (
    <div className="App">
      {/* home page layout */}
      <UserInfoContext.Provider value={[loggingUserInfo, setLoginUsserInfo]}>
        <Router basename="/QueenZ-Zone">
          <Switch>
            <Route exact path="/">
              <HeaderSearchBar></HeaderSearchBar>
              <Layout></Layout>
              <NaviBar></NaviBar>
            </Route>
            <PrivateRoute path="/Favorite">
              <HeaderSearchBar></HeaderSearchBar>
              <FavoritePage></FavoritePage>
              <NaviBar></NaviBar>
            </PrivateRoute>
            <Route exact path="/Home">
              <HeaderSearchBar></HeaderSearchBar>
              <Layout></Layout>
              <NaviBar></NaviBar>
            </Route>
            <Route exact path="/Category">
              <HeaderSearchBar></HeaderSearchBar>
              <Layout></Layout>
              <NaviBar></NaviBar>
            </Route>

            <Route path="/MyMessage">
              <HeaderSearchBar></HeaderSearchBar>
              <MyMessage></MyMessage>
              <NaviBar></NaviBar>
            </Route>
            <Route path="/ShoppingCard">
              <HeaderSearchBar></HeaderSearchBar>
              <ShoppingCardPage></ShoppingCardPage>

              <NaviBar></NaviBar>
            </Route>

            <Route path="/MyAccount">
              <HeaderSearchBar></HeaderSearchBar>
              <MyAccount></MyAccount>
              <NaviBar></NaviBar>
            </Route>
            <Route path="/Order">
              <HeaderSearchBar></HeaderSearchBar>
              <Order></Order>
              <NaviBar></NaviBar>
            </Route>
            <Route path="/Cloth">
              <HeaderSearchBar></HeaderSearchBar>
              <CatagoryProduct></CatagoryProduct>
              <NaviBar></NaviBar>
            </Route>
            <Route path="/Dashboard">
              <MainDashboard></MainDashboard>
            </Route>

            <Route path="*">
              <HeaderSearchBar></HeaderSearchBar>

              <NaviBar></NaviBar>
            </Route>
          </Switch>
        </Router>
      </UserInfoContext.Provider>
    </div>
  );
}

export default App;
