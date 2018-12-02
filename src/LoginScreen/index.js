import React from "react";
import { createDrawerNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "./LoginScreen";
import DashboardScreen from "../DashboardScreen";

const LoginScreenRouter = createDrawerNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      drawerLockMode: "locked-open",
      drawerLabel: null
    }
  },
  Dashboard: {
    screen: DashboardScreen,
    navigationOptions: {
      drawerLockMode: "locked-open",
      drawerLabel: null
    }
  }
});
export default createAppContainer(LoginScreenRouter);
